import { useState, useEffect, useRef } from 'react';
import { InView } from 'react-intersection-observer';
import classNames from 'classnames/bind';

import Video from '~/components/Video';
import styles from './Home.module.scss';
import * as videoService from '~/services/videoService';

const cx = classNames.bind(styles);

function Home() {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(1);
    const [type, setType] = useState('for-you');
    const [volume, setVolume] = useState(0.2);
    const [prevVolume, setPrevVolume] = useState(volume);
    const [mute, setMute] = useState(false);

    // Ref
    const pageRandom = useRef([]);

    useEffect(() => {
        videoService.loadVideo({ type, page }).then((data) => {
            // random video in data

            data.sort(() => Math.random() - 0.5);
            setVideos((priv) => [...priv, ...data]);
        });
    }, [page]);

    useEffect(() => {
        if (volume * 100 === 0) {
            setMute(true);
        } else {
            setMute(false);
        }
    }, [volume]);

    const handleAdjustVolume = (e) => {
        setVolume(e.target.value / 100);
    };
    const toggleMute = () => {
        if (mute) {
            setVolume(prevVolume);
            setMute(false);
        } else {
            setPrevVolume(volume);
            setVolume(0);
            setMute(true);
        }
    };

    const handleRandomPage = (min, max) => {
        const countPage = max + 1 - min;
        const randomList = pageRandom.current;
        let page;

        if (randomList.length >= countPage) {
            randomList.length === countPage && randomList.push(max);
            page = ++randomList[randomList.length - 1];

            return page;
        }

        do {
            page = Math.floor(Math.random() * countPage + min);
        } while (randomList.includes(page));

        randomList.push(page);

        return page;
    };

    return (
        <div className={cx('wrapper')}>
            {videos.map((video, index) => (
                <Video
                    key={index}
                    data={video}
                    volume={volume}
                    mute={mute}
                    adjustVolume={handleAdjustVolume}
                    toggleMuted={toggleMute}
                ></Video>
            ))}
            <InView onChange={(inView) => inView && setPage(handleRandomPage(1, 10))}></InView>
        </div>
    );
}

export default Home;
