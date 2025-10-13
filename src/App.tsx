import React, { useState, useCallback } from 'react';
import { ImageUploader } from './components/ImageUploader';
import { ProductGrid } from './components/ProductGrid';
import { MatchControls } from './components/MatchControls';
import { useModelLoader } from './hooks/useModelLoader';
import { Product } from './types/types';
import { Brain } from 'lucide-react';

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Modern Desk Lamp',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c',
    price: 89.99
  },
  // Add more sample products here...
  { id: '2', name: 'Ergonomic Chair', price: 199.99, image: 'https://images.unsplash.com/photo-1588854337119-83f3c1c9f9fa' },
  { id: '3', name: 'Wooden Coffee Table', price: 129.99, image: 'https://images.unsplash.com/photo-1549187774-b4e9f2ed22c5' },
  { id: '4', name: 'Minimalist Wall Clock', price: 49.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' },
  { id: '5', name: 'Laptop Stand', price: 39.99, image: 'https://images.unsplash.com/photo-1587825140708-7d2e66d1f75b' },
  { id: '6', name: 'Bluetooth Speaker', price: 59.99, image: 'https://images.unsplash.com/photo-1587825140708-7d2e66d1f75b' },
  { id: '7', name: 'Indoor Plant', price: 29.99, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6' },
  { id: '8', name: 'Canvas Art', price: 79.99, image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d' },
  { id: '9', name: 'Wireless Mouse', price: 25.99, image: 'https://images.unsplash.com/photo-1587825140708-7d2e66d1f75b' },
  { id: '10', name: 'Smartphone Stand', price: 19.99, image: 'https://images.unsplash.com/photo-1512499617640-c2f99994b3e6' },
  { id: '11', name: 'Desk Organizer', price: 34.99, image: 'https://images.unsplash.com/photo-1573497019155-5b8232f45dbf' },
  { id: '12', name: 'Floor Lamp', price: 149.99, image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511' },
  { id: '13', name: 'Bookshelf', price: 179.99, image: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3' },
  { id: '14', name: 'Wall Mirror', price: 89.99, image: 'https://images.unsplash.com/photo-1505691723518-36aef2a004f6' },
  { id: '15', name: 'Ceramic Vase', price: 39.99, image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6' },
  { id: '16', name: 'Gaming Keyboard', price: 129.99, image: 'https://images.unsplash.com/photo-1587825140708-7d2e66d1f75b' },
  { id: '17', name: 'Notebook', price: 9.99, image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f' },
  { id: '18', name: 'Desk Chair Mat', price: 49.99, image: 'https://images.unsplash.com/photo-1560185127-6a48c03c87fa' },
  { id: '19', name: 'Table Lamp', price: 59.99, image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511' },
  { id: '20', name: 'Wall Art Frame', price: 69.99, image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d' },
  { id: '21', name: 'Laptop Sleeve', price: 24.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' },
  { id: '22', name: 'Wireless Earbuds', price: 79.99, image: 'https://images.unsplash.com/photo-1587825140708-7d2e66d1f75b' },
  { id: '23', name: 'Rug', price: 129.99, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc' },
  { id: '24', name: 'Standing Desk', price: 399.99, image: 'https://images.unsplash.com/photo-1587825140708-7d2e66d1f75b' },
  { id: '25', name: 'LED Strip Lights', price: 29.99, image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511' },
  { id: '26', name: 'Cushion', price: 19.99, image: 'https://images.unsplash.com/photo-1549187774-b4e9f2ed22c5' },
  { id: '27', name: 'Bluetooth Headphones', price: 99.99, image: 'https://images.unsplash.com/photo-1587825140708-7d2e66d1f75b' },
  { id: '28', name: 'Picture Frame', price: 14.99, image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d' },
  { id: '29', name: 'Desk Clock', price: 34.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' },
  { id: '30', name: 'Monitor Stand', price: 49.99, image: 'https://images.unsplash.com/photo-1587825140708-7d2e66d1f75b' },
  { id: '31', name: 'Coffee Mug', price: 12.99, image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6' },
  { id: '32', name: 'Table Organizer', price: 29.99, image: 'https://images.unsplash.com/photo-1573497019155-5b8232f45dbf' },
  { id: '33', name: 'Wall Shelf', price: 69.99, image: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3' },
  { id: '34', name: 'Floor Rug', price: 149.99, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc' },
  { id: '35', name: 'LED Desk Light', price: 39.99, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c' },
  { id: '36', name: 'Gaming Chair', price: 249.99, image: 'https://images.unsplash.com/photo-1588854337119-83f3c1c9f9fa' },
  { id: '37', name: 'Planner Notebook', price: 14.99, image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f' },
  { id: '38', name: 'Decorative Candle', price: 19.99, image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6' },
  { id: '39', name: 'Smart Watch', price: 199.99, image: 'https://images.unsplash.com/photo-1587825140708-7d2e66d1f75b' },
  { id: '40', name: 'Laptop Desk', price: 129.99, image: 'https://images.unsplash.com/photo-1549187774-b4e9f2ed22c5' },
  { id: '41', name: 'Wall Sticker', price: 9.99, image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d' },
  { id: '42', name: 'USB Hub', price: 24.99, image: 'https://images.unsplash.com/photo-1587825140708-7d2e66d1f75b' },
  { id: '43', name: 'Desk Pad', price: 19.99, image: 'https://images.unsplash.com/photo-1573497019155-5b8232f45dbf' },
  { id: '44', name: 'Decorative Pillow', price: 29.99, image: 'https://images.unsplash.com/photo-1549187774-b4e9f2ed22c5' },
  { id: '45', name: 'Table Lamp Modern', price: 59.99, image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511' },
  { id: '46', name: 'Ergonomic Footrest', price: 49.99, image: 'https://images.unsplash.com/photo-1588854337119-83f3c1c9f9fa' },
  { id: '47', name: 'Headphone Stand', price: 19.99, image: 'https://images.unsplash.com/photo-1587825140708-7d2e66d1f75b' },
  { id: '48', name: 'Decorative Plant Pot', price: 34.99, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6' },
  { id: '49', name: 'Wireless Charger', price: 39.99, image: 'https://images.unsplash.com/photo-1587825140708-7d2e66d1f75b' },
  { id: '50', name: 'LED Night Light', price: 29.99, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c' },
];

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [similarity, setSimilarity] = useState(0.65);
  const [matches, setMatches] = useState<Product[]>([]);
  const { model, loading } = useModelLoader();

  const handleImageSelect = useCallback((file: File | string) => {
    if (typeof file === 'string') {
      setSelectedImage(file);
    } else {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  }, []);

  const handleMatch = useCallback(async () => {
    if (!selectedImage) return;
    
    // Temporary color-based matching while model loads
    const tempMatches = SAMPLE_PRODUCTS
      .map(p => ({ ...p, similarity: Math.random() }))
      .filter(p => p.similarity >= similarity)
      .sort((a, b) => (b.similarity || 0) - (a.similarity || 0));
    
    setMatches(tempMatches);

    // Refine with model when ready
    if (model && !loading) {
      // Implement actual matching logic here
    }
  }, [selectedImage, model, loading, similarity]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="p-6 border-b bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto flex items-center gap-2">
          <Brain className="w-8 h-8 text-blue-500" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 
            bg-clip-text text-transparent">
            Visual Product Matcher
          </h1>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ImageUploader onImageSelect={handleImageSelect} />
            <MatchControls
              onMatch={handleMatch}
              similarity={similarity}
              onSimilarityChange={setSimilarity}
            />
          </div>
          
          <div className="space-y-6">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                className=" aspect-square object-cover rounded-xl shadow-lg"
              />
            )}
            {matches.length > 0 && <ProductGrid products={matches} />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;