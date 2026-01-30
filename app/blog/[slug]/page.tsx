// This file is deprecated in favor of individual page files.
// See app/blog/[post-slug]/page.tsx for specific implementations.
import { notFound } from 'next/navigation';

export default function Page() {
  notFound();
}