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
import { onAuthStateChanged } from 'firebase/auth';


function App() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      fetchServices();
      setLoading(false);
    })

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-500">
        Cargando...
      </div>
    )
  }

  if (user) {
    return (
      <AdminPanel services={services} setServices={setServices} />
    )
  }

  return (
    <div className="antialiased font-sans bg-gray-50 text-gray-900 leading-normal tracking-wide">
      <div className="relative">
        <a href="#admin" className="absolute top-4 right-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors">
          Admin
        </a>
      </div>
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
