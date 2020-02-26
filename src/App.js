import React, {Component} from 'react';
import {Input} from 'reactstrap';
import './App.css';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import logo from './nordicenergy_logo_bw_black.png';
import Switch from "react-switch";


const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10
  },
  {
    value: 20
  },
  {
    value: 30
  },
  {
    value: 40,
    label: '100k',
  },
  {
    value: 50
  },
  {
    value: 60
  },
  {
    value: 70
  },

  {
    value: 80,
    label: '200k',
  },
  {
    value: 90
  },
  {
    value: 100
  },
  {
    value: 110
  },
  {
    value: 120,
    label: '300k',
  },
  {
    value: 130
  },
  {
    value: 140
  },
  {
    value: 150
  },
  {
    value: 160,
    label: '400k',
  },
  {
    value: 170
  },
  {
    value: 180
  },
  {
    value: 190
  },
  {
    value: 200,
    label: '500k',
  },
];

const marksUseCases = [
  {
    value: 2,
    label: '2',
  },
  {
    value: 5
  },
  {
    value: 8
  },
  {
    value: 12
  },
  {
    value: 16
  },
  {
    value: 20
  },
  {
    value: 24
  },
  {
    value: 28
  },
  {
    value: 32
  },
  {
    value: 36,
  },
  {
    value: 40
  },
  {
    value: 44
  },
  {
    value: 48
  },
  {
    value: 52
  },
  {
    value: 56
  },
  {
    value: 60
  },
  {
    value: 64
  },
  {
    value: 68
  },
  {
    value: 72
  },
  {
    value: 76
  },
  {
    value: 80
  },
  {
    value: 84
  },
  {
    value: 88
  },
  {
    value: 92
  },
  {
    value: 96
  },
  {
    value: 100,
    label: '100',
  },
];

const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const StakedTokensSlider = withStyles({
  root: {
    color: '#E6B800',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    border: '5px solid #E6B800',
    marginTop: -12,
    marginLeft: -14,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  track: {
    height: 6,
    backgroundColor: '#e6b800',
  },
  rail: {
    height: 6,
    opacity: 0.3,
    backgroundColor: '#e6b800',
  },
  mark: {
    backgroundColor: '#e6b800',
    height: 6,
    width: 1,
    marginTop: 6,

  },
  markActive: {
    opacity: 1,
    backgroundColor: '#e6b800',
  },
  markLabel: {
    marginTop: 10
  }
})(Slider);

function valuetext(value) {
  return `${value}k`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}


class Login extends Component {

  constructor() {
    super();
    this.state = {
      stakedTokens: 1000,
      tokenPrice: 0.1,
      useCases: 2,
      txNumber: 40000,
      txCost: 0.01,
      nodeCategory: 1.0,
      isGenesisPhase: false,
      genesisPhaseCheckboxState: true,
      circulatingSuply: 0,
      percentageCirculatingSuply: 50,
      percentageMark: [],
      apiData:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleStakedTokensSlider = this.handleStakedTokensSlider.bind(this);
    this.handleUseCasesSlider = this.handleUseCasesSlider.bind(this);
    this.handlePercentageCirculatingSuplySlider = this.handlePercentageCirculatingSuplySlider.bind(this)

  }
  componentDidMount() {
    fetch('1609f116-a205-42f9-80b8-32a99fa17a6b')
        .then(res => res.json())
        .then((data) => {
          this.setState({ apiData: data }, () => this.processDataFromApi() )
        })
        .catch(console.log)
  }

  processDataFromApi(){

    this.setState({ tokenPrice: (this.state.apiData.market_data.current_price.usd).toFixed(3) });
    this.setState({ circulatingSuply: (this.state.apiData.market_data.circulating_supply).toFixed(0) }, () => this.setPercentageMark() )

  }

  setPercentageMark(){

    this.setState({

      percentageMark: [
        {
          value: 4,
          label: (this.state.circulatingSuply *0.02 / 1000).toFixed(0)+"Net",
        },
        {
          value: 10
        },
        {
          value: 20
        },
        {
          value: 30
        },
        {
          value: 40,
        },
        {
          value: 50
        },
        {
          value: 60
        },
        {
          value: 70
        },

        {
          value: 80,
        },
        {
          value: 90
        },
        {
          value: 100
        },
        {
          value: 110
        },
        {
          value: 120,
        },
        {
          value: 130
        },
        {
          value: 140
        },
        {
          value: 150
        },
        {
          value: 160,
        },
        {
          value: 170
        },
        {
          value: 180
        },
        {
          value: 190
        },
        {
          value: 200,
          label: (this.state.circulatingSuply / 1000000).toFixed(2)+"M Lit",
        },
      ]
    })


  }
  result = () => {
    if (this.state.isGenesisPhase == true) {
      return (this.state.stakedTokens * this.state.tokenPrice * 0.1 * this.state.nodeCategory / 365);
    }
    return (this.state.txNumber * this.state.txCost / (this.state.circulatingSuply * this.state.percentageCirculatingSuply / 100) * this.state.stakedTokens * 0.6 * parseFloat(this.state.nodeCategory));
  };

  normalResult = () => {
    return (this.state.txNumber * this.state.txCost / (this.state.circulatingSuply * this.state.percentageCirculatingSuply / 100) * this.state.stakedTokens * 0.6 * parseFloat(this.state.nodeCategory));
  };

  handleChange(evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value }, () => this.checkDisableGenesisPhase());
    if (evt.target.name == "useCases") {
      let newTxNumber = evt.target.value * 20000;
      this.setState({ "txNumber": newTxNumber }, () => this.checkDisableGenesisPhase());
    }

  }

  checkDisableGenesisPhase() {

    if ((this.normalResult() * 365) > (this.state.tokenPrice * this.state.stakedTokens * 0.1 * this.state.nodeCategory )) {
      this.setState({ "genesisPhaseCheckboxState": true });
      this.setState({ "isGenesisPhase": false });
    }
    else {
      this.setState({ "genesisPhaseCheckboxState": false });
    }

  }

  handleCheckboxChange(evt) {
    this.setState({ "isGenesisPhase": evt });
  }

  handleStakedTokensSlider(evt, value) {
    this.setState({ "stakedTokens": value * 2500 });
  }

  handlePercentageCirculatingSuplySlider(evt, value) {
    this.setState({ "percentageCirculatingSuply": (value * 0.5).toFixed(1) }, () => this.checkDisableGenesisPhase()) ;
  }

  handleUseCasesSlider(evt, value) {
    let newTxNumber = value * 20000;
    this.setState({ "useCases": value });
    this.setState({ "txNumber": newTxNumber }, () => this.checkDisableGenesisPhase());
  }


  render() {
    const classes = makeStyles(theme => ({
      root: {
        width: 300,
      },
      margin: {
        height: theme.spacing(3),
      },
    }));
    return (
        <div className='container'>
          <div className='content'>

            <div className='imageContainer'>
              <img className='nordicenergylogoImage' src={logo} />
              <span>
              Staking
               <br />
              Calculator
              </span>
            </div>
            <div className="userInputContainer">
              <div className='textFormPairContainer'>
                <p >My Staked Tokens</p>
                <p className="netAmmount">{this.state.stakedTokens + " NET"}</p>
                <StakedTokensSlider className="stakedTokensSlider"
                                    name="stakedTokens"
                                    aria-label="discrete-slider-small-steps"
                                    defaultValue={1}
                                    marks={marks}
                                    valueLabelDisplay="off"
                                    min={0}
                                    max={200}
                                    step={1}
                                    onChange={this.handleStakedTokensSlider}
                />
              </div>
              <div className='textFormPairContainer'>
                <p >Use Cases</p>
                <p className="netAmmount">{this.state.useCases}</p>
                <StakedTokensSlider
                    name="useCases"
                    aria-label="discrete-slider-small-steps"
                    defaultValue={1}
                    marks={marksUseCases}
                    valueLabelDisplay="off"
                    min={2}
                    max={100}
                    step={1}
                    onChange={this.handleUseCasesSlider}
                />
              </div>
              <div className='textFormPairContainer'>
                <p >Total Staked Tokens / Circulating Supply</p>
                <p className="netAmmount">{this.state.percentageCirculatingSuply + "%"}</p>
                <StakedTokensSlider className="stakedTokensSlider"
                                    name="stakedTokens"
                                    aria-label="discrete-slider-small-steps"
                                    defaultValue={100}
                                    marks={this.state.percentageMark}
                                    valueLabelDisplay="off"
                                    min={4}
                                    max={200}
                                    step={1}
                                    onChange={this.handlePercentageCirculatingSuplySlider}
                />
              </div>
              <div className='textFormPairContainer'>
                <p>Node Type</p>
                <Input type="select" name="nodeCategory" id="nodeCategorySelect" className='inputContainer' onChange={this.handleChange} >
                  <option value="1">Node</option>
                  <option value="2">Trust Node</option>
                  <option value="1.2">Nordic Energy Pool Staking 1 Month</option>
                  <option value="1.4">Nordic Energy Pool Staking 3 Months</option>
                  <option value="1.6">Nordic Energy Pool Staking 6 Months</option>
                  <option value="1.8">Nordic Energy Pool Staking 12 Months</option>
                </Input>
              </div>

              <div className='textFormPairContainer'>
                <p>Average Number of Transactions / Day</p>
                <Input type="number" name="txNumber" step="1000" className='inputContainer' value={this.state.txNumber} onChange={this.handleChange} />
              </div>

              <div className='textFormPairContainer'>
                <p>Nordic Energy Token Price(USD)</p>
                <Input type="number" name="tokenPrice"  step="0.1" className='inputContainer' value={this.state.tokenPrice} onChange={this.handleChange} />
              </div>

              <div className='textFormPairContainer'>
                <label>Activate Genesis Phase</label>
                <Switch
                    name="isGenesisPhase"
                    checked={this.state.isGenesisPhase}
                    onChange={this.handleCheckboxChange}
                    disabled={this.state.genesisPhaseCheckboxState}
                    onColor="#E6B800"
                    onHandleColor="#E6B800"
                    handleDiameter={28}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={15}
                    width={50}
                    className="react-switch"
                    id="material-switch"
                />
              </div>

            </div>
            <div className='resultingIncomeContainer'>
              <p>Resulting Income</p>
              <p>{(this.result()).toFixed(2) + "$"}/day</p>
              <p>{(this.result() * 30).toFixed(2) + "$"}/month</p>
              <p>{(this.result() * 365).toFixed(2) + "$"}/year</p>
              <p>{(this.result() * 365 / this.state.tokenPrice / this.state.stakedTokens * 100).toFixed(2) + "%"} - annual Staking Rate</p>
              <p>{(this.state.tokenPrice * this.state.stakedTokens).toFixed(2) + "$"} - my Nordic Energy (NET) Token value</p>
            </div>
            <div className='optionalInformationContainer'>
              <a href="https://medium.com/nordicenergy-blog">Blog</a>
              <a href="https://github.com/nordicenergy/staking-calculator/">GitHub Link</a>
              <a href="https://etherscan.io/address/0x163e6936bcBbFf19ab70d1E5083FEB4507E96EFB">Donate 1 NET</a>
            </div>
          </div>
        </div>
    );
  }
}


function App() {
  return (new Login()
  );
}

export default App;













