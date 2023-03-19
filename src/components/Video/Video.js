import classNames from 'classnames/bind';
import { useEffect, useRef, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import dataTemp from '~/temp/data';
import Button from '../Button';
import {
    CommentIcon,
    FlagIcon,
    HeartIcon,
    MusicIcon,
    MutedIcon,
    PauseIcon,
    PlayIcon,
    ShareIcon,
    VolumeIcon,
} from '../Icons';
import Image from '../Image';
import SharePopper from '~/components/Shares/SharePopper';
import styles from './Video.module.scss';

import { ModalContextKey } from '~/contexts/ModalContexts';

const cx = classNames.bind(styles);

function Video({ data, mute, volume, adjustVolume, toggleMuted }) {
    // get modal context value
    const { loginModalShow } = useContext(ModalContextKey);
    //
    const [isPlaying, setIsPlaying] = useState(false);
    // ref
    const videoRef = useRef();
    // currentUser
    const currentUser = false;

    const videoShares = dataTemp.shares.videoShares;

    useEffect(() => {
        videoRef.current.volume = volume;
    });

    const playVideo = () => {
        if (isPlaying === false) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };
    const pauseVideo = () => {
        if (isPlaying === true) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };
    const togglePlayVideo = () => {
        if (isPlaying === false) {
            playVideo();
        } else {
            pauseVideo();
        }
    };

    function playVideoInViewport() {
        var bounding = videoRef.current.getBoundingClientRect();
        // console.log(bounding);
        if (bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            playVideo();
        } else {
            pauseVideo();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', playVideoInViewport);
        return () => window.removeEventListener('scroll', playVideoInViewport);
    });
    return (
        <div className={cx('wrapper')}>
            <Link to>
                <Image className={cx('avatar')} src={data.user.avatar} />
            </Link>
            <div className={cx('content')}>
                <div className={cx('info-container')}>
                    <div className={cx('author-container')}>
                        <Link to state className={cx('author-item')}>
                            <p className={cx('user-name')}>{data.user.nickname}</p>
                            <p className={cx('full-name')}>{`${data.user.first_name} ${data.user.last_name}`}</p>
                        </Link>
                        <Button
                            className={cx('btn-follow')}
                            small
                            outline
                            onClick={!currentUser ? loginModalShow : null}
                        >
                            Follow
                        </Button>
                    </div>
                    <div className={cx('caption')}>{data.description}</div>
                    <div className={cx('music')}>
                        <MusicIcon className={cx('music-icon')} /> {data.music}
                    </div>
                </div>
                <div className={cx('video-wrapper')}>
                    <div className={cx('video-card')}>
                        <video loop src={data.file_url} ref={videoRef}></video>
                        <div className={cx('control-play')} onClick={togglePlayVideo}>
                            {isPlaying ? <PauseIcon /> : <PlayIcon />}
                        </div>
                        <div className={cx('control-volume')}>
                            <div className={cx('container', { active: mute })}>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="1"
                                    orient="vertical"
                                    onChange={adjustVolume}
                                    value={volume * 100}
                                />
                            </div>
                            <div className="volume-icon" onClick={toggleMuted}>
                                {mute ? <MutedIcon /> : <VolumeIcon />}
                            </div>
                        </div>
                        <div className={cx('report')}>
                            <FlagIcon /> Report
                        </div>
                    </div>
                    <div className={cx('actions')}>
                        <div className={cx('action-btn')} onClick={!currentUser ? loginModalShow : null}>
                            <Button rounded>
                                <HeartIcon />
                            </Button>
                            <p className={cx('number')}>{data.likes_count}</p>
                        </div>
                        <div className={cx('action-btn')} onClick={!currentUser ? loginModalShow : null}>
                            <Button rounded>
                                <CommentIcon />
                            </Button>
                            <p className={cx('number')}>{data.comments_count}</p>
                        </div>
                        <SharePopper data={videoShares}>
                            <div className={cx('action-btn')}>
                                <Button rounded>
                                    <ShareIcon />
                                </Button>
                                <p className={cx('number')}>{data.shares_count || 'Chia sẻ'}</p>
                            </div>
                        </SharePopper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
