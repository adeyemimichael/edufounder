"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Device {
  id: string;
  name: string;
  type: string;
  lastActive: string;
  location: string;
  browser: string;
  trusted: boolean;
}

export default function DeviceManager() {
  const [devices, setDevices] = useState<Device[]>([
    {
      id: '1',
      name: 'Windows Laptop',
      type: 'Desktop',
      lastActive: '2024-02-20T12:00:00',
      location: 'Lagos, Nigeria',
      browser: 'Chrome 121.0.0',
      trusted: true
    },
    {
      id: '2',
      name: 'iPhone 13',
      type: 'Mobile',
      lastActive: '2024-02-19T18:30:00',
      location: 'Lagos, Nigeria',
      browser: 'Safari 17.2',
      trusted: true
    }
  ]);

  const handleRemoveDevice = (deviceId: string) => {
    setDevices(devices.filter(device => device.id !== deviceId));
  };

  const toggleTrusted = (deviceId: string) => {
    setDevices(devices.map(device =>
      device.id === deviceId ? { ...device, trusted: !device.trusted } : device
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Device Management</h2>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Add Device
        </button>
      </div>

      <div className="space-y-4">
        {devices.map((device) => (
          <motion.div
            key={device.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg border"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">
                    {device.type === 'Desktop' ? '💻' : '📱'}
                  </span>
                  <div>
                    <h3 className="font-medium">{device.name}</h3>
                    <p className="text-sm text-gray-500">{device.browser}</p>
                  </div>
                </div>
                <div className="mt-2 space-y-1 text-sm text-gray-500">
                  <p>Last active: {new Date(device.lastActive).toLocaleString()}</p>
                  <p>Location: {device.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => toggleTrusted(device.id)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    device.trusted
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {device.trusted ? 'Trusted' : 'Untrusted'}
                </button>
                <button
                  onClick={() => handleRemoveDevice(device.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Security Tips</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Regularly review your connected devices</li>
          <li>• Remove devices you no longer use</li>
          <li>• Only trust devices you frequently use</li>
          <li>• Enable two-factor authentication for better security</li>
        </ul>
      </div>
    </div>
  );
}