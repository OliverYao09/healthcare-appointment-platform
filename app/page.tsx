import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1 className="text-white text-3xl underline">Home</h1>
      <Button className="bg-white">Click me</Button>
    </div>
  );
}
