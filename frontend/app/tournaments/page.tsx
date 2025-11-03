'use client';

import { useState, useEffect } from 'react';
import { tournaments } from '@/lib/api';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/contexts/AuthContext';
import { Trophy, Calendar, MapPin, Users, Plus, Filter } from 'lucide-react';
import Link from 'next/link';

interface Tournament {
  id: string;
  name: string;
  field: string;
  category: string;
  startDate: string;
  endDate?: string;
  status: string;
  teams: any[];
}

export default function TournamentsPage() {
  const { user } = useAuth();
  const [tournamentList, setTournamentList] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    loadTournaments();
  }, []);

  const loadTournaments = async () => {
    try {
      const response = await tournaments.getAll();
      setTournamentList(response.data);
    } catch (error) {
      console.error('Failed to load tournaments:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredTournaments = tournamentList.filter(tournament => {
    const matchesName = tournament.name.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = !categoryFilter || tournament.category === categoryFilter;
    return matchesName && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'UPCOMING': return 'bg-blue-100 text-blue-800';
      case 'ONGOING': return 'bg-green-100 text-green-800';
      case 'COMPLETED': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Loading tournaments...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tournaments</h1>
          <p className="text-gray-600 mt-1">Manage and view Ultimate Frisbee tournaments</p>
        </div>
        {(user?.role === 'ADMIN' || user?.role === 'COACH') && (
          <Link href="/tournaments/create">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Tournament
            </Button>
          </Link>
        )}
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search tournaments..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="md:w-48">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              <option value="Mixed">Mixed</option>
              <option value="Open">Open</option>
              <option value="Women">Women</option>
              <option value="Youth">Youth</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Tournaments Grid */}
      {filteredTournaments.length === 0 ? (
        <Card>
          <div className="text-center py-12">
            <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No tournaments found</h3>
            <p className="text-gray-600 mb-4">
              {tournamentList.length === 0 
                ? "No tournaments have been created yet." 
                : "No tournaments match your current filters."}
            </p>
            {(user?.role === 'ADMIN' || user?.role === 'COACH') && tournamentList.length === 0 && (
              <Link href="/tournaments/create">
                <Button>Create First Tournament</Button>
              </Link>
            )}
          </div>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTournaments.map((tournament) => (
            <Card key={tournament.id} className="hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-900">{tournament.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tournament.status)}`}>
                    {tournament.status}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {tournament.field}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(tournament.startDate).toLocaleDateString()}
                    {tournament.endDate && ` - ${new Date(tournament.endDate).toLocaleDateString()}`}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {tournament.teams?.length || 0} teams
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <Link href={`/tournaments/${tournament.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </Link>
                    <Link href={`/tournaments/${tournament.id}/leaderboard`} className="flex-1">
                      <Button size="sm" className="w-full">
                        Leaderboard
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}