'use client';

import { useState, useEffect } from 'react';
import { coaching } from '@/lib/api';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Users, Calendar, BarChart3, Plus, Home, FileText } from 'lucide-react';
import Link from 'next/link';

interface Child {
  id: string;
  name: string;
  age: number;
  gender: string;
  attendances: any[];
  assessments: any[];
}

interface Session {
  id: string;
  title: string;
  date: string;
  attendances: any[];
}

export default function CoachingPage() {
  const [children, setChildren] = useState<Child[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [reports, setReports] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [childrenRes, sessionsRes, reportsRes] = await Promise.all([
        coaching.getChildren(),
        coaching.getSessions(),
        coaching.getReports(),
      ]);
      setChildren(childrenRes.data);
      setSessions(sessionsRes.data);
      setReports(reportsRes.data);
    } catch (error) {
      console.error('Failed to load coaching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Loading coaching data...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Coaching Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage your students and track their progress</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-4 gap-4">
        <Link href="/coaching/children/create">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="font-medium">Add Child</div>
                <div className="text-sm text-gray-600">New profile</div>
              </div>
            </div>
          </Card>
        </Link>

        <Link href="/coaching/sessions/create">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Calendar className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="font-medium">New Session</div>
                <div className="text-sm text-gray-600">Schedule training</div>
              </div>
            </div>
          </Card>
        </Link>

        <Link href="/coaching/home-visits/create">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Home className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="font-medium">Home Visit</div>
                <div className="text-sm text-gray-600">Log visit</div>
              </div>
            </div>
          </Card>
        </Link>

        <Link href="/coaching/reports">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <BarChart3 className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <div className="font-medium">Reports</div>
                <div className="text-sm text-gray-600">View analytics</div>
              </div>
            </div>
          </Card>
        </Link>
      </div>

      {/* Stats Overview */}
      {reports && (
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{reports.totalChildren}</div>
              <div className="text-sm text-gray-600">Total Children</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{sessions.length}</div>
              <div className="text-sm text-gray-600">Total Sessions</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{reports.attendanceRate}%</div>
              <div className="text-sm text-gray-600">Attendance Rate</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">
                {Object.values(reports.genderDistribution || {}).reduce((a: any, b: any) => a + b, 0)}
              </div>
              <div className="text-sm text-gray-600">Active Students</div>
            </div>
          </Card>
        </div>
      )}

      {/* Recent Children */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Children</h2>
          <Link href="/coaching/children">
            <Button variant="outline" size="sm">View All</Button>
          </Link>
        </div>
        
        {children.length === 0 ? (
          <Card>
            <div className="text-center py-8">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No children profiles yet</h3>
              <p className="text-gray-600 mb-4">Start by adding your first child profile</p>
              <Link href="/coaching/children/create">
                <Button>Add First Child</Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="grid md:grid-cols-3 gap-4">
            {children.slice(0, 6).map((child) => (
              <Card key={child.id}>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">{child.name}</h3>
                  <div className="text-sm text-gray-600">
                    <div>Age: {child.age}</div>
                    <div>Gender: {child.gender}</div>
                    <div>Attendances: {child.attendances?.length || 0}</div>
                    <div>Assessments: {child.assessments?.length || 0}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Recent Sessions */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Sessions</h2>
          <Link href="/coaching/sessions">
            <Button variant="outline" size="sm">View All</Button>
          </Link>
        </div>
        
        {sessions.length === 0 ? (
          <Card>
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No sessions scheduled</h3>
              <p className="text-gray-600 mb-4">Create your first training session</p>
              <Link href="/coaching/sessions/create">
                <Button>Create Session</Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="space-y-3">
            {sessions.slice(0, 5).map((session) => (
              <Card key={session.id}>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-900">{session.title}</h3>
                    <p className="text-sm text-gray-600">
                      {new Date(session.date).toLocaleDateString()} - {session.attendances?.length || 0} attendees
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}