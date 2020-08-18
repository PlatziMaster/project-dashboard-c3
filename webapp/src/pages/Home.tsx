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
import {
  sub,
  format,
} from 'date-fns';

const Home: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    conversationsByTime: [],
    countTotalRate: [],
    countTotalRateByTime: [],
  });

  useEffect(() => {
    const today = new Date();
    const endAt = format(today, "yyyy/MM/dd");
    const startAt = format(sub(today, { days: 7 }), "yyyy/MM/dd");
    fetch(`http://localhost:3000/api/conversations/stats?start=${startAt}&end=${endAt}`)
    .then(response => response.json())
    .then(data => setData(data));
  }, []);

  const updateFilter = async (option: any) => {
    const { startAt, endAt } = option;
    setShowModal(false);
    const rta = await fetch(`http://localhost:3000/api/conversations/stats?start=${startAt}&end=${endAt}`);
    const data = await rta.json();
    setData(data);
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
              <RenderAreaChart data={data.conversationsByTime}></RenderAreaChart>
            </div>
          </IonCard>
          <IonCard className="grid--card">
            <IonCardHeader>
              <IonCardTitle>
                Calificaciones
              </IonCardTitle>
            </IonCardHeader>
            <div className="card--chart">
              <RenderPieChart data={data.countTotalRate}></RenderPieChart>
            </div>
          </IonCard>
          <IonCard className="grid--card">
            <IonCardHeader>
              <IonCardTitle>
                Número de conversaciones al dia
              </IonCardTitle>
            </IonCardHeader>
            <div className="card--chart">
              <RenderBarChart data={data.countTotalRateByTime}></RenderBarChart>
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
