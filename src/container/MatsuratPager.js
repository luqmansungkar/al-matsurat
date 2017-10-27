import React, {Component, PropTypes} from 'react';
import {View, ViewPagerAndroid, StyleSheet} from 'react-native';
import konten from '../data/source.js';
import MatsuratPage from '../component/MatsuratPage.js';
import ViewPager from 'react-native-viewpager';

export default class MatsuratPager extends Component{

    onPress(){
        //do something
    }

    onPageSelected = (e) => {
        console.log(">>> "+JSON.stringify(e));
    };

    _renderPages(data, pageID){
        return (
            <MatsuratPage 
                arabicText={data.arab}
                terjemahText={data.terjemah}
                judul={data.judul}
                pengulangan={data.pengulangan}
                onPress={this.onPress}
                arabicFontSize={20}
                terjemahFontSize={20}
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
                renderPage={this._renderPages} 
                dataSource={source}
                onChangePage={this.onPageSelected}
                renderPageIndicator={false} />
        );
    }
}