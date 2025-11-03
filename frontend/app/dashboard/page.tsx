'use client';

import { useAuth } from '@/contexts/AuthContext';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Trophy, Users, Camera, Calendar, BarChart3, Plus } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const { user } = useAuth();

  const roleBasedContent = {
    ADMIN: {
      title: 'Admin Dashboard',
      description: 'Manage tournaments, users, and system settings',
      actions: [
        { label: 'Create Tournament', href: '/tournaments/create', icon: Trophy },
        { label: 'View All Tournaments', href: '/tournaments', icon: Trophy },
        { label: 'Manage Gallery', href: '/gallery', icon: Camera },
      ]
    },
    COACH: {
      title: 'Coach Dashboard',
      description: 'Track your students progress and manage sessions',
      actions: [
        { label: 'Add Child Profile', href: '/coaching/children/create', icon: Users },
        { label: 'Create Session', href: '/coaching/sessions/create', icon: Calendar },
        { label: 'View Reports', href: '/coaching/reports', icon: BarChart3 },
      ]
    },
    PLAYER: {
      title: 'Player Dashboard',
      description: 'View tournaments and track your performance',
      actions: [
        { label: 'View Tournaments', href: '/tournaments', icon: Trophy },
        { label: 'Browse Gallery', href: '/gallery', icon: Camera },
      ]
    },
    SPECTATOR: {
      title: 'Spectator Dashboard',
      description: 'Follow tournaments and browse event photos',
      actions: [
        { label: 'View Tournaments', href: '/tournaments', icon: Trophy },
        { label: 'Browse Gallery', href: '/gallery', icon: Camera },
      ]
    }
  };

  const content = roleBasedContent[user?.role as keyof typeof roleBasedContent];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-blue-100 text-lg">{content?.description}</p>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {content?.actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link key={index} href={action.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{action.label}</h3>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
        <Card>
          <div className="text-center py-12">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No recent activity</h3>
            <p className="text-gray-600">
              Start by creating tournaments, sessions, or uploading photos to see activity here.
            </p>
          </div>
        </Card>
      </div>

      {/* Stats Overview */}
      {(user?.role === 'ADMIN' || user?.role === 'COACH') && (
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Overview</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">0</div>
                <div className="text-sm text-gray-600">
                  {user?.role === 'ADMIN' ? 'Total Tournaments' : 'Active Children'}
                </div>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">0</div>
                <div className="text-sm text-gray-600">
                  {user?.role === 'ADMIN' ? 'Active Teams' : 'Sessions This Month'}
                </div>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">0</div>
                <div className="text-sm text-gray-600">
                  {user?.role === 'ADMIN' ? 'Total Players' : 'Assessments'}
                </div>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">0</div>
                <div className="text-sm text-gray-600">Gallery Photos</div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}