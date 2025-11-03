'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button';
import { Spinner } from '@/components/ui/Spinner';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface AuthForm {
  name?: string;
  email: string;
  password: string;
  role?: string;
}

export default function Home() {
  const { user, login, signup } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<AuthForm>();

  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    }
  }, [user, router]);

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner className="h-8 w-8" />
      </div>
    );
  }

  const onSubmit = async (data: AuthForm) => {
    setLoading(true);
    try {
      if (isSignUp) {
        await signup(data.name!, data.email, data.password, data.role);
      } else {
        await login(data.email, data.password);
      }
      router.push('/dashboard');
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Welcome Section */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-blue-600">YUltimate</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The ultimate platform for Ultimate Frisbee tournament management, 
            coaching, and community building.
          </p>
          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Tournament Management & Leaderboards
            </div>
            <div className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Coaching Tools & Progress Tracking
            </div>
            <div className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Photo Gallery with AI Face Recognition
            </div>
          </div>
        </div>

        {/* Auth Form */}
        <Card className="max-w-md mx-auto w-full">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </h2>
            <p className="text-gray-600 mt-2">
              {isSignUp ? 'Join the Ultimate Frisbee community' : 'Welcome back!'}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {isSignUp && (
              <Input
                label="Full Name"
                {...register('name', { required: 'Name is required' })}
                error={errors.name?.message}
              />
            )}
            
            <Input
              label="Email"
              type="email"
              {...register('email', { required: 'Email is required' })}
              error={errors.email?.message}
            />
            
            <Input
              label="Password"
              type="password"
              {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
              error={errors.password?.message}
            />
            
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <select
                  {...register('role')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="SPECTATOR">Spectator</option>
                  <option value="PLAYER">Player</option>
                  <option value="COACH">Coach</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>
            )}
            
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Sign In')}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
            </button>
          </div>

          <div className="mt-4 text-center">
            <Button
              variant="outline"
              onClick={async () => {
                try {
                  await login('spectator@yultimate.com', 'spectator123');
                  router.push('/dashboard');
                } catch (e) {
                  console.error('Spectator quick login failed', e);
                }
              }}
              className="w-full"
            >
              Continue as Spectator
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}