frontend/src/components/Internationalization.js:
```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Internationalization = () => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(`/api/translations?lang=${language}`);
        setTranslations(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTranslations();
  }, [language]);

  const handleChangeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div>
      <h1>{translations.title}</h1>
      <p>{translations.description}</p>
      <button onClick={() => handleChangeLanguage('en')}>English</button>
      <button onClick={() => handleChangeLanguage('fr')}>French</button>
      <button onClick={() => handleChangeLanguage('es')}>Spanish</button>
    </div>
  );
};

export default Internationalization;
```

This code generates the Internationalization component. It imports React, useState, useEffect, and axios from the shared dependencies. The component fetches translations based on the selected language using an API endpoint `/api/translations`. The translations are stored in the `translations` state. The `handleChangeLanguage` function updates the `language` state when a language button is clicked. The component renders the title, description, and language buttons.