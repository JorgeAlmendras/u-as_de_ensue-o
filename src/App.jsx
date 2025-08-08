import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Import the Firestore instance

import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

alert("Agustina, puerca, cochina");

function App() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesColection = collection(db, 'services');
        const servicesSnapshot = await getDocs(servicesColection);
        const servicesList = servicesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setServices(servicesList);
        console.log("Servicios obtenidos:", servicesList);
      } catch (error) {
        console.error("Error al obtener los servicios:", error);
      } finally {
        setLoading(false);
      }

    };

    fetchServices();
  }, []);

  return (
    <div className="antialiased font-sans bg-gray-50 text-gray-900 leading-normal tracking-wide">
      <Header />
      <main>
        <Hero />
        {loading ? (
          <div className="text-center py-8">Loading services...</div>
        ) : (
          <Services servicesData={services} />
        )}
        <Portfolio />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
