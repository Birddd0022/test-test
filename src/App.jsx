import { useState } from 'react';
import './App.css'
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import tattoos from './data/tattoos';
import AppSearch from './components/AppSearch';

function App() {
    const [selectedTattoo, setSelectedTattoo] = useState(null);          //selectedTattoo = ตัวแปรเราสามารถนำไปใช้ต่อได้  //setSelectedTattoo เซ็ทข้อมูลใหม่ได้
    const [searchText, setSearchText] = useState('');

    function onTattooOpenClick(theTattoo) {
        setSelectedTattoo(theTattoo);
    }

    function onTattooCloseClick() {
        setSelectedTattoo(null);
    }
    
    const tattooElements = tattoos.filter((tattoo) => {
        return tattoo.title.includes(searchText);
    }).map((tattoo, index) => {  
        return <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick}/>;
    });

    let tattooPost = null;
    if (!!selectedTattoo) {
        tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick={onTattooCloseClick}/>
    }

  return (
      <div className='app'>
         <AppHeader />
         <section className='app-section'>
            <div className='app-container'>
                    <AppSearch value={searchText} onValueChange={setSearchText}/>
                       <div className='app-grid'>
                          {tattooElements}
                       </div>
            </div>
         </section>
         {tattooPost}
      </div>
      
  
    );
}

export default App
