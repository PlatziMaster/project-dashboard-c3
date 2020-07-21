import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import RenderAreaChart from '../components/RenderAreaChart';
import './Home.css';

const Home: React.FC = () => {

  const data = [
    {label: 'Enero', value: 4000},
    {label: '2', value: 3000},
    {label: '3', value: 2000},
    {label: 'Page D', value: 2780},
    {label: 'Page E', value: 1890},
    {label: 'Page F', value: 2390},
    {label: 'Page G', value: 1212},
  ];

  const data2 = [
    {label: 'Page A', value: 4000},
    {label: 'Page B', value: 3000},
    {label: 'Page C', value: 2000},
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <RenderAreaChart data={data}></RenderAreaChart>
        <RenderAreaChart data={data2}></RenderAreaChart>
      </IonContent>
    </IonPage>
  );
};

export default Home;
