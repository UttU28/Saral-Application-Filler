import React, { useEffect, useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { baseURL } from '../config/api';

type ConnectionStatus = 'connecting' | 'online' | 'offline';

export const Header: React.FC = () => {
  const [status, setStatus] = useState<ConnectionStatus>('connecting');
  const [isChecking, setIsChecking] = useState(false);

  const checkConnection = async () => {
    setIsChecking(true);
    setStatus('connecting');

    try {
      const response = await fetch(`${baseURL}/health`, {
        method: 'GET',
      });

      if (response.ok) {
        setStatus('online');
      } else {
        setStatus('offline');
      }
    } catch (error) {
      console.error('Health check failed:', error);
      setStatus('offline');
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  const getStatusColor = () => {
    switch (status) {
      case 'online':
        return 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]';
      case 'offline':
        return 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]';
      case 'connecting':
      default:
        return 'bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]';
    }
  };

  return (
    <header className="flex items-center justify-between mb-4">
      <h1 className="text-lg font-semibold text-white/90">Saral Job Apply</h1>
      <div className="flex items-center gap-2">
        <button
          onClick={checkConnection}
          disabled={isChecking}
          className="p-1.5 rounded-full hover:bg-white/5 text-gray-400 hover:text-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Refresh connection status"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
        <div
          className={`w-3 h-3 rounded-full border border-white/20 ${getStatusColor()}`}
          aria-label={`Backend connection status: ${status}`}
        />
      </div>
    </header>
  );
};