import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import RenderAreaChart from '../components/RenderAreaChart';
import RenderPieChart from '../components/RenderPieChart';
import './Home.css';

const Home: React.FC = () => {

  const data = [
    {label: 'Enero', value: 4000},
    {label: 'Feb', value: 3000},
    {label: 'Mar', value: 2000},
    {label: 'April', value: 2780},
    {label: 'Page E', value: 1890},
    {label: 'Page F', value: 2390},
    {label: 'Page G', value: 1212},
  ];

  const data2 = [
    {label: '1', value: 10, color: '#FED13D'},
    {label: '2', value: 20, color: '#10dc60'},
    {label: '3', value: 7, color: '#B70000'},
    {label: '4', value: 100, color: '#7044ff'},
    {label: '5', value: 200, color: '#ff509e'},
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
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
                Número de conversaciones al mes
              </IonCardTitle>
            </IonCardHeader>
            <div className="card--chart">
              <RenderAreaChart data={data}></RenderAreaChart>
            </div>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
