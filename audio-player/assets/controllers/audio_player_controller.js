import { Controller } from '@hotwired/stimulus';

const clock = (seconds) => {
    if (!Number.isFinite(seconds)) return '0:00';
    const total = Math.floor(seconds);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = String(total % 60).padStart(2, '0');
    return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${s}` : `${m}:${s}`;
};

/**
 * A player over a native audio element. Only one player plays at a time on a page.
 *
 * @target audio, play, playIcon, pauseIcon, current, duration, seek, speed, mute, volume, volumeIcon, mutedIcon
 * @value  speeds, playLabel, pauseLabel, muteLabel, unmuteLabel, speedLabel
 * @event  audio-player:play, audio-player:pause, audio-player:end
 */
export default class extends Controller {
    static targets = ['audio', 'play', 'playIcon', 'pauseIcon', 'current', 'duration', 'seek', 'speed', 'mute', 'volume', 'volumeIcon', 'mutedIcon'];
    static values = { speeds: { type: Array, default: [1] }, playLabel: String, pauseLabel: String, muteLabel: String, unmuteLabel: String, speedLabel: String };

    connect() {
        this.speedIndex = 0;
        const audio = this.audioTarget;
        this.on = (name, handler) => audio.addEventListener(name, handler);
        this.on('loadedmetadata', () => this.refresh());
        this.on('durationchange', () => this.refresh());
        this.on('timeupdate', () => this.refresh());
        this.on('play', () => {
            document.querySelectorAll('audio').forEach((other) => other !== audio && other.pause());
            this.state(true);
            this.dispatch('play');
        });
        this.on('pause', () => {
            this.state(false);
            this.dispatch('pause');
        });
        this.on('ended', () => {
            this.state(false);
            this.dispatch('end');
        });
        this.refresh();
        this.state(false);
        this.paintSpeed();
    }

    toggle() {
        const audio = this.audioTarget;
        audio.paused ? audio.play() : audio.pause();
    }

    seek() {
        const audio = this.audioTarget;
        if (Number.isFinite(audio.duration)) audio.currentTime = (this.seekTarget.value / 100) * audio.duration;
    }

    volume() {
        this.audioTarget.volume = Number(this.volumeTarget.value);
        this.audioTarget.muted = this.audioTarget.volume === 0;
        this.paintVolume();
    }

    mute() {
        this.audioTarget.muted = !this.audioTarget.muted;
        this.paintVolume();
    }

    cycleSpeed() {
        this.speedIndex = (this.speedIndex + 1) % this.speedsValue.length;
        this.audioTarget.playbackRate = this.speedsValue[this.speedIndex];
        this.paintSpeed();
    }

    paintSpeed() {
        if (!this.hasSpeedTarget) return;
        const speed = this.speedsValue[this.speedIndex] ?? 1;
        this.speedTarget.textContent = `${speed}x`;
        this.speedTarget.setAttribute('aria-label', this.speedLabelValue.replace('{speed}', String(speed)));
    }

    paintVolume() {
        if (!this.hasMuteTarget) return;
        const muted = this.audioTarget.muted;
        this.volumeIconTarget.classList.toggle('hidden', muted);
        this.mutedIconTarget.classList.toggle('hidden', !muted);
        this.muteTarget.setAttribute('aria-label', muted ? this.unmuteLabelValue : this.muteLabelValue);
    }

    state(playing) {
        this.element.dataset.playing = String(playing);
        this.playIconTarget.classList.toggle('hidden', playing);
        this.pauseIconTarget.classList.toggle('hidden', !playing);
        this.playTarget.setAttribute('aria-label', playing ? this.pauseLabelValue : this.playLabelValue);
    }

    refresh() {
        const audio = this.audioTarget;
        this.currentTarget.textContent = clock(audio.currentTime);
        this.durationTarget.textContent = clock(audio.duration);
        if (Number.isFinite(audio.duration) && audio.duration > 0) {
            this.seekTarget.value = String((audio.currentTime / audio.duration) * 100);
            this.seekTarget.setAttribute('aria-valuetext', `${clock(audio.currentTime)} / ${clock(audio.duration)}`);
        }
    }
}
