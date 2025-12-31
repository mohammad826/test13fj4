import React from 'react';

interface Props {
  title: string;
  content: string;
}

export const GenericPage: React.FC<Props> = ({ title, content }) => {
  return (
    <div className="w-full glass-panel rounded-3xl p-12 min-h-[60vh] flex flex-col items-center text-center animate-fadeIn mt-6">
      <h1 className="text-4xl font-bold text-amber-400 mb-8">{title}</h1>
      <p className="text-xl text-gray-200 leading-loose max-w-3xl">{content}</p>
      
      <div className="mt-12 w-full h-64 bg-black/20 rounded-xl flex items-center justify-center">
         <span className="text-gray-500">محتوای تکمیلی صفحه (Placeholder)</span>
      </div>
    </div>
  );
};