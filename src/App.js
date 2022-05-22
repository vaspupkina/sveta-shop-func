import logo from './logo.svg';
import './App.css';
import ClothingInformation from './components/ClothingInformation'
import ClothingModel from './models/ClothingModel';

function App() {
  const product1 = new ClothingModel(
        'Tiger of Sweden',
        'Leonard coat',
        'Minimalistic coat in cotton-blend',
        'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        399,
        '£'
  );
return (
  <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ClothingInformation item={product1}/>
    </div>
  </div>
);
}

export default App;