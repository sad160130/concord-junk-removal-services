import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { ViewState } from '../types';

interface BreadcrumbItem {
  label: string;
  view?: ViewState;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (view: ViewState) => void;
  className?: string;
  alignment?: 'left' | 'center';
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  items, 
  onNavigate, 
  className = '',
  alignment = 'left'
}) => {
  const justifyClass = alignment === 'center' ? 'justify-center' : 'justify-start';

  return (
    <nav className={`flex ${justifyClass} text-sm text-gray-500 mb-6 ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <button
            onClick={() => onNavigate(ViewState.HOME)}
            className="inline-flex items-center hover:text-green-600 transition-colors"
          >
            <Home size={16} className="mr-1.5" />
            Home
          </button>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight size={16} className="text-gray-400 mx-1" />
              {item.view ? (
                <button
                  onClick={() => onNavigate(item.view!)}
                  className="hover:text-green-600 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-gray-900 font-semibold" aria-current="page">
                  {item.label}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};