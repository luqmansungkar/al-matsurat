import React, {Component, PropTypes} from 'react';
import {
    View, 
    ViewPagerAndroid, 
    StyleSheet,
} from 'react-native';
import konten from '../data/source.js';
import MatsuratPage from '../component/MatsuratPage.js';
import ViewPager from 'react-native-viewpager';

export default class MatsuratPager extends Component{

    constructor(props){
        super(props);
        this.state = {
            currentPage: 0
        };
    }
    onPress(){
        //do something
    }

    onPageSelected = (e) => {
        if( e == 9 || e == 13 ){
            let d = new Date();
            let hour = d.getHours();

            if(hour < 12 && this.state.currentPage == 12 && e == 13){
                setTimeout(() => {
                    this.viewPager.goToPage(17);
                }, 50);
            }else if(hour >= 12 && this.state.currentPage == 8 && e == 9){
                setTimeout(() => {
                    this.viewPager.goToPage(13);
                }, 50);
            }
        }
        
        this.setState({currentPage: e});
        console.log(">>> "+JSON.stringify(this.state));
    };

    _renderPages(data, pageID){      
        return (
            <MatsuratPage 
                arabicText={data.arab}
                terjemahText={data.terjemah}
                judul={data.judul}
                pengulangan={data.pengulangan}
                onPress={this.onPress}
                arabicFontSize={this.props.arabicSize}
                terjemahFontSize={this.props.terjemahSize}
            />
        );
    }

    _renderPageIndicator(e){
        console.log(JSON.stringify(e));
        return null;
    }

    render(){
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });

        var source = dataSource.cloneWithPages(konten);

        return(
            <ViewPager 
                renderPage={this._renderPages.bind(this)} 
                dataSource={source}
                onChangePage={this.onPageSelected.bind(this)}
                renderPageIndicator={false}
                ref={viewPager => {this.viewPager = viewPager; }} />
        );
    }
}