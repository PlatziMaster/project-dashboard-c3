import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButtons,
  IonButton,
  IonModal,
  IonFooter
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import RenderAreaChart from '../components/RenderAreaChart';
import RenderPieChart from '../components/RenderPieChart';
import Filter from "./../components/Filter";
import './Home.css';
import RenderBarChart from '../components/RenderBarChart';

const Home: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([
    {label: 'Enero', value: 4000},
    {label: 'Feb', value: 3000},
    {label: 'Mar', value: 2000},
    {label: 'April', value: 2780},
    {label: 'Page E', value: 1890},
    {label: 'Page F', value: 2390},
    {label: 'Page G', value: 1212},
  ]);

  const [data2, setData2] = useState([
    {label: '1', value: 10, color: '#FED13D'},
    {label: '2', value: 20, color: '#10dc60'},
    {label: '3', value: 7, color: '#B70000'},
    {label: '4', value: 100, color: '#7044ff'},
    {label: '5', value: 200, color: '#ff509e'},
  ]);

  const [data3, setData3] = useState([
    {name: 'BarChart 1', expected: 500, received: 360, },
    {name: 'BarChart 2', expected: 600,  received: 310, },
    {name: 'BarChart 3', expected: 550,  received: 100, },
    {name: 'BarChart 4', expected: 439,  received: 395, },
    {name: 'BarChart 5', expected: 559,  received: 438, }
  ]);

  const updateFilter = (option: any) => {
    console.log('padre', option);
    setShowModal(false);
    setData([
      {label: 'Enero', value: 232},
      {label: 'Feb', value: 3434},
      {label: 'Mar', value: 3422},
      {label: 'April', value: 343},
      {label: 'Page E', value: 323},
      {label: 'Page F', value: 34},
      {label: 'Page G', value: 3434},
    ]);

    setData2([
      {label: '1', value: 12, color: '#FED13D'},
      {label: '2', value: 3434, color: '#10dc60'},
      {label: '3', value: 343, color: '#B70000'},
      {label: '4', value: 34, color: '#7044ff'},
      {label: '5', value: 343, color: '#ff509e'},
    ]);

    setData3([
      {name: 'BarChart 1', expected: 2323, received: 34, },
      {name: 'BarChart 2', expected: 6030,  received: 310, },
      {name: 'BarChart 3', expected: 550,  received: 23, },
      {name: 'BarChart 4', expected: 34,  received: 32, },
      {name: 'BarChart 5', expected: 53459,  received: 45, }
    ]);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowModal(true)}>Filters</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="grid">
          <IonCard className="grid--card">
            <IonCardHeader>
              <IonCardTitle>
                Número de conversaciones al mes
              </IonCardTitle>
            </IonCardHeader>
            <div className="card--chart">
              <RenderAreaChart data={data}></RenderAreaChart>
            </div>
          </IonCard>
          <IonCard className="grid--card">
            <IonCardHeader>
              <IonCardTitle>
                Calificaciones
              </IonCardTitle>
            </IonCardHeader>
            <div className="card--chart">
              <RenderPieChart data={data2}></RenderPieChart>
            </div>
          </IonCard>
          <IonCard className="grid--card">
            <IonCardHeader>
              <IonCardTitle>
                Número de conversaciones al dia
              </IonCardTitle>
            </IonCardHeader>
            <div className="card--chart">
              <RenderBarChart data={data3}></RenderBarChart>
            </div>
          </IonCard>
        </div>
        <IonModal isOpen={showModal}>
          <IonToolbar color="primary">
            <IonTitle>Filtros</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setShowModal(false)}>Cerrar</IonButton>
            </IonButtons>
          </IonToolbar>
          <IonContent>
            <Filter updateFilter={updateFilter}></Filter>
          </IonContent>
          <IonFooter>
            <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
          </IonFooter>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
