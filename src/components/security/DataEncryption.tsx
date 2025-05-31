"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface EncryptionSetting {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  level: 'basic' | 'advanced' | 'maximum';
}

export default function DataEncryption() {
  const [settings, setSettings] = useState<EncryptionSetting[]>([
    {
      id: '1',
      name: 'File Encryption',
      description: 'Encrypt all uploaded files and documents',
      enabled: true,
      level: 'advanced'
    },
    {
      id: '2',
      name: 'End-to-End Messaging',
      description: 'Secure communication with tutors and peers',
      enabled: true,
      level: 'maximum'
    },
    {
      id: '3',
      name: 'Local Storage Encryption',
      description: 'Encrypt data stored on your device',
      enabled: false,
      level: 'basic'
    }
  ]);

  const toggleSetting = (settingId: string) => {
    setSettings(settings.map(setting =>
      setting.id === settingId ? { ...setting, enabled: !setting.enabled } : setting
    ));
  };

  const updateLevel = (settingId: string, level: EncryptionSetting['level']) => {
    setSettings(settings.map(setting =>
      setting.id === settingId ? { ...setting, level } : setting
    ));
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-medium mb-4">Encryption Status</h3>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-2xl">🔒</span>
          </div>
          <div>
            <p className="font-medium">Your data is secure</p>
            <p className="text-sm text-gray-500">
              Using AES-256 encryption for all sensitive data
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {settings.map((setting) => (
          <motion.div
            key={setting.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg border"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={setting.enabled}
                      onChange={() => toggleSetting(setting.id)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                  <h3 className="font-medium ml-3">{setting.name}</h3>
                </div>
                <p className="text-sm text-gray-500 mt-1">{setting.description}</p>
              </div>
              <select
                value={setting.level}
                onChange={(e) => updateLevel(setting.id, e.target.value as EncryptionSetting['level'])}
                className="ml-4 p-2 border rounded text-sm"
                disabled={!setting.enabled}
              >
                <option value="basic">Basic</option>
                <option value="advanced">Advanced</option>
                <option value="maximum">Maximum</option>
              </select>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Security Information</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• All data is encrypted at rest and in transit</li>
          <li>• We use industry-standard encryption protocols</li>
          <li>• Regular security audits are performed</li>
          <li>• Your encryption keys are never stored on our servers</li>
        </ul>
      </div>
    </div>
  );
}