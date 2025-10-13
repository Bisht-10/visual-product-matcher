import { useState, useEffect } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { ModelState } from '../types/types';

export const useModelLoader = () => {
  const [modelState, setModelState] = useState<ModelState>({
    model: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const loadModel = async () => {
      try {
        const model = await mobilenet.load({ version: 1, alpha: 0.35 });
        setModelState({ model, loading: false, error: null });
      } catch (err) {
        setModelState({ model: null, loading: false, error: 'Failed to load model' });
      }
    };

    requestIdleCallback(() => {
      loadModel();
    });
  }, []);

  return modelState;
};