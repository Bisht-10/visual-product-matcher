import React, { useCallback } from 'react';
import { Upload, ImagePlus } from 'lucide-react';

interface Props {
  onImageSelect: (file: File | string) => void;
}

export const ImageUploader: React.FC<Props> = ({ onImageSelect }) => {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file?.type.startsWith('image/')) {
      onImageSelect(file);
    }
  }, [onImageSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onImageSelect(file);
  }, [onImageSelect]);

  return (
    <div 
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="w-full p-8 border-2 border-dashed border-blue-400 rounded-xl
        bg-gradient-to-br from-blue-50 to-purple-50
        hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
    >
      <div className="flex flex-col items-center gap-4">
        <Upload className="w-12 h-12 text-blue-500" />
        <p className="text-lg font-medium text-gray-700">
          Drag & drop an image or
        </p>
        <label className="px-6 py-3 bg-blue-500 text-white rounded-lg
          hover:bg-blue-600 transition-colors cursor-pointer flex items-center gap-2">
          <ImagePlus size={20} />
          Choose File
          <input
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};