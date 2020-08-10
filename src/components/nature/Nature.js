import React from 'react';
import './Nature.scss';
import NatureActivity from './NatureActivity';

import fiji from '../../resources/img/nature/beach-Fiji.jpg';
import tahiti from '../../resources/img/nature/beach-Tulum.jpg';
import borabora from '../../resources/img/nature/beach-Bora Bora.jpg';
import maldivies from '../../resources/img/nature/beach-Maldivies.jpg';

import Glacier from '../../resources/img/nature/usNationalPark-Glacier.jpg';
import GrandCanyon from '../../resources/img/nature/usNationalPark-Grand Canyon.jpg';
import Yellowstone from '../../resources/img/nature/usNationalPark-Yellowstone.jpg';
import Yosemite from '../../resources/img/nature/usNationalPark-Yosemite.jpg';

import Courchevel from '../../resources/img/nature/ski-Courchevel.jpg';
import Gstaad from '../../resources/img/nature/ski-Gstaad.jpg';
import Niseko from '../../resources/img/nature/ski-Niseko.jpg';
import Telluride from '../../resources/img/nature/ski-Telluride.jpg';

import Amazon from '../../resources/img/nature/rainforest-Amazon.jpg';
import Daintree from '../../resources/img/nature/rainforest-Daintree Rainforest.jpg';
import ElYunque from '../../resources/img/nature/rainforest-El Yunque Rainforest.jpg';
import TheCongo from '../../resources/img/nature/rainforest-The Congo Rainforest.jpg';

import BanGiocDetian from '../../resources/img/nature/waterfall-Ban Gioc-Detian Falls.jpg';
import Iguazu from '../../resources/img/nature/waterfall-Iguazu.jpg';
import Niagara from '../../resources/img/nature/waterfall-Niagara Falls.jpg';
import Victoria from '../../resources/img/nature/waterfall-Victoria Falls.jpg';

import CraterLake from '../../resources/img/nature/lake-Crater Lake.jpg';
import DeadSea from '../../resources/img/nature/lake-Dead Sea.jpg';
import LagunaColorada from '../../resources/img/nature/lake-Laguna Colorada.jpg';
import LakeComo from '../../resources/img/nature/lake-Lake Como.jpg';

import AustralianSavanna from '../../resources/img/nature/grassland-Australian Savanna.jpg';
import CanadianPrairies from '../../resources/img/nature/grassland-Canadian Prairies.jpg';
import GreatPlains from '../../resources/img/nature/grassland-Great Plains.jpg';
import HulunBuir from '../../resources/img/nature/grassland-Hulun Buir.jpg';

class Nature extends React.Component {
    
    render () {
        return (
            <div className="Nature">
                <h2>NATURE</h2>
                <div className="naturemain">
                    <div className="natureBack">
                    </div>
                    <div className="natureActivity natureBeach">
                        <NatureActivity name='Beaches' show={[1,1,1,0]} images={[fiji,tahiti,borabora,maldivies]} places={['Fiji','Tahiti','Bora Bora','Maldivies']} onclick={this.props.searchTerm} searchDescription={['Fiji','Tahiti','Bora Bora','Maldivies']} searchCity = {['Suva, Fiji','Papeete','Vaitape','Malé,Maldives']} />
                    </div>
                    <div className="natureActivity natureNPark" >
                        <NatureActivity name='National_Parks' show={[1,1,1,1]} images={[Glacier,Yosemite,Yellowstone,GrandCanyon]} places={['Glacier','Yosemite','Yellowstone','Grand Canyon']} onclick={this.props.searchTerm} searchDescription={['Glacier National Park','Yosemite','Yellowstone','Grand Canyon']} searchCity = {['Columbia Falls','Yosemite','Yellowstone','Grand Canyon']} />
                    </div>
                    <div className="natureActivity natureSki">
                        <NatureActivity name='Ski_Areas' show={[1,1,1,1]} images={[Courchevel,Gstaad,Niseko,Telluride]} places={['Courchevel','Gstaad','Niseko','Telluride']} onclick={this.props.searchTerm} searchDescription={['Courchevel','Gstaad','Niseko','Telluride']} searchCity = {['Courchevel','Gstaad','Niseko','Telluride']} />
                    </div>
                    <div className="natureActivity natureRainforest">
                        <NatureActivity name='Rainforests' show={[1,1,1,1]} images={[Amazon,Daintree,ElYunque,TheCongo]} places={['Amazon','Daintree','El Yunque','The Congo']} onclick={this.props.searchTerm} searchDescription={['Amazon Rainforest','Daintre','El Yunque','The Congo Rainforest']} searchCity = {['Manaus,Brazil','eCairns,Australia','Río Grande','']} />
                    </div>
                    <div className="natureActivity natureWaterfalls">
                        <NatureActivity name='Waterfalls' show={[1,1,0,1]} images={[Victoria,Iguazu,Niagara,BanGiocDetian]} places={['Victoria','Iguazu','Niagara','Ban Gioc-Detian']} onclick={this.props.searchTerm} searchDescription={['Victoria Falls','Foz do Iguaçu','Niagara Falls','Ban Gioc-Detian']} searchCity = {['fittingly,Zimbabwe','Iguazu','Niagara','Trùng Khánh']} />
                    </div>
                    <div className="natureActivity natureLake">
                        <NatureActivity name='Lakes' show={[0,1,1,1]} images={[CraterLake,DeadSea,LagunaColorada,LakeComo]} places={['Crater Lake','Dead Sea','Laguna Colorada','Lake Como']} onclick={this.props.searchTerm} searchDescription={['Klamath','Ein Gedi','Potosi,Bolivia','Como,Italy']} searchCity = {['Crater Lake','Dead Sea','Laguna Colorada','Lake Como']} />
                    </div>
                    <div className="natureActivity natureGrassland">
                        <NatureActivity name='Grasslands' show={[1,1,1,1]} images={[AustralianSavanna,HulunBuir,CanadianPrairies,GreatPlains]} places={['Australian Savanna','Hulun Buir','Canadian Prairies','Great Plains']} onclick={this.props.searchTerm} searchDescription={['Australian Savanna','Hulun Buir','Canadian Prairies','Great Plains']} searchCity = {['','Hulunbuir','','']} />
                    </div>
                
                </div>
            </div>
        );
    };    
};

export default Nature;