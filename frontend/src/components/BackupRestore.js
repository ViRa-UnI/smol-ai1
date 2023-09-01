frontend/src/components/BackupRestore.js:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BackupRestore = () => {
  const [backupData, setBackupData] = useState(null);
  const [restoreData, setRestoreData] = useState(null);
  const [backupStatus, setBackupStatus] = useState('');
  const [restoreStatus, setRestoreStatus] = useState('');

  useEffect(() => {
    // Fetch backup data from the server
    const fetchBackupData = async () => {
      try {
        const response = await axios.get('/api/backup');
        setBackupData(response.data);
      } catch (error) {
        console.error('Error fetching backup data:', error);
      }
    };

    fetchBackupData();
  }, []);

  const handleBackup = async () => {
    try {
      const response = await axios.post('/api/backup');
      setBackupStatus(response.data.message);
    } catch (error) {
      console.error('Error creating backup:', error);
      setBackupStatus('Failed to create backup');
    }
  };

  const handleRestore = async () => {
    try {
      const response = await axios.post('/api/restore', { data: restoreData });
      setRestoreStatus(response.data.message);
    } catch (error) {
      console.error('Error restoring backup:', error);
      setRestoreStatus('Failed to restore backup');
    }
  };

  return (
    <div>
      <h2>Backup and Restore</h2>
      <div>
        <h3>Create Backup</h3>
        <button onClick={handleBackup}>Create Backup</button>
        {backupStatus && <p>{backupStatus}</p>}
      </div>
      <div>
        <h3>Restore Backup</h3>
        <textarea
          value={restoreData}
          onChange={(e) => setRestoreData(e.target.value)}
          placeholder="Paste backup data here"
        ></textarea>
        <button onClick={handleRestore}>Restore Backup</button>
        {restoreStatus && <p>{restoreStatus}</p>}
      </div>
      {backupData && (
        <div>
          <h3>Backup Data</h3>
          <pre>{JSON.stringify(backupData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default BackupRestore;
```

This code generates the BackupRestore component, which allows users to create backups of their tasks and restore them if needed. The component includes a "Create Backup" section with a button to create a backup and display the backup status. It also includes a "Restore Backup" section with a textarea for users to paste the backup data and a button to restore the backup. The restore status is also displayed. The component fetches the backup data from the server on mount and displays it if available.