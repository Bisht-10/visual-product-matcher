import React from 'react';
import { Zap } from 'lucide-react';

interface Props {
  onMatch: () => void;
  similarity: number;
  onSimilarityChange: (value: number) => void;
}

export const MatchControls: React.FC<Props> = ({
  onMatch,
  similarity,
  onSimilarityChange
}) => {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-lg">
      <button
        onClick={onMatch}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500
          hover:from-blue-600 hover:to-purple-600 text-white rounded-lg
          font-medium flex items-center justify-center gap-2 group
          transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <Zap className="w-5 h-5 group-hover:animate-pulse" />
        Match Now
      </button>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Minimum Similarity: {Math.round(similarity * 100)}%
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={similarity}
          onChange={(e) => onSimilarityChange(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none
            cursor-pointer accent-blue-500"
        />
      </div>
    </div>
  );
};