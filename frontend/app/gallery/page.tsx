'use client';

import { useState, useEffect } from 'react';
import { gallery } from '@/lib/api';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/contexts/AuthContext';
import { Camera, Upload, Pin, Search, Filter } from 'lucide-react';

interface GalleryImage {
  id: string;
  imageUrl: string;
  title?: string;
  description?: string;
  isPinned: boolean;
  uploadedAt: string;
  faces: any[];
}

export default function GalleryPage() {
  const { user } = useAuth();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [showPinnedOnly, setShowPinnedOnly] = useState(false);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      const response = await gallery.getAll();
      setImages(response.data);
    } catch (error) {
      console.error('Failed to load images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePin = async (imageId: string) => {
    try {
      await gallery.togglePin(imageId);
      setImages(images.map(img => 
        img.id === imageId ? { ...img, isPinned: !img.isPinned } : img
      ));
    } catch (error) {
      console.error('Failed to toggle pin:', error);
    }
  };

  const filteredImages = images.filter(image => {
    const matchesFilter = !filter || 
      image.title?.toLowerCase().includes(filter.toLowerCase()) ||
      image.description?.toLowerCase().includes(filter.toLowerCase());
    const matchesPinned = !showPinnedOnly || image.isPinned;
    return matchesFilter && matchesPinned;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Loading gallery...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Photo Gallery</h1>
          <p className="text-gray-600 mt-1">Browse and manage event photos</p>
        </div>
        {(user?.role === 'ADMIN' || user?.role === 'COACH') && (
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Upload Photos
          </Button>
        )}
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search photos..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showPinnedOnly}
                onChange={(e) => setShowPinnedOnly(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Pinned only</span>
            </label>
          </div>
        </div>
      </Card>

      {/* Gallery Grid */}
      {filteredImages.length === 0 ? (
        <Card>
          <div className="text-center py-12">
            <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No photos found</h3>
            <p className="text-gray-600 mb-4">
              {images.length === 0 
                ? "No photos have been uploaded yet." 
                : "No photos match your current filters."}
            </p>
            {(user?.role === 'ADMIN' || user?.role === 'COACH') && images.length === 0 && (
              <Button>
                <Upload className="h-4 w-4 mr-2" />
                Upload First Photo
              </Button>
            )}
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <Card key={image.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={image.imageUrl}
                  alt={image.title || 'Gallery image'}
                  className="w-full h-48 object-cover"
                />
                {image.isPinned && (
                  <div className="absolute top-2 left-2">
                    <div className="bg-yellow-500 text-white p-1 rounded-full">
                      <Pin className="h-3 w-3" />
                    </div>
                  </div>
                )}
                {(user?.role === 'ADMIN' || user?.role === 'COACH') && (
                  <div className="absolute top-2 right-2">
                    <Button
                      size="sm"
                      variant={image.isPinned ? 'primary' : 'outline'}
                      onClick={() => handleTogglePin(image.id)}
                      className="p-1"
                    >
                      <Pin className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                {image.title && (
                  <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                )}
                {image.description && (
                  <p className="text-sm text-gray-600 mb-2">{image.description}</p>
                )}
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{new Date(image.uploadedAt).toLocaleDateString()}</span>
                  {image.faces?.length > 0 && (
                    <span>{image.faces.length} faces detected</span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Demo Images for Testing */}
      {images.length === 0 && (
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Demo Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Tournament Finals', url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400' },
                { title: 'Team Celebration', url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400' },
                { title: 'Action Shot', url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400' },
              ].map((demo, index) => (
                <div key={index} className="relative">
                  <img
                    src={demo.url}
                    alt={demo.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    {demo.title}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">
              These are demo images. Upload your own photos to get started!
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}