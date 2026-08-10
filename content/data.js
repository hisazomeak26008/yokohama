//入力
//データ（これを追加する）
const DATA_LIST = {
    "2026": {
        "07": { date: "2026年7月1日", population: "3,758,990", household: "1,811,626", area: "438.23" },
        "06": { date: "2026年6月1日", population: "3,759,615", household: "1,810,755", area: "438.23" },
        "05": { date: "2026年5月1日", population: "3,759,385", household: "1,809,823", area: "438.23" },
        "04": { date: "2026年4月1日", population: "3,753,758", household: "1,803,669", area: "438.23" },
        "03": { date: "2026年3月1日", population: "3,748,451", household: "1,792,965", area: "438.23" },
        "02": { date: "2026年2月1日", population: "3,750,041", household: "1,792,745", area: "438.23" },
        "01": { date: "2026年1月1日", population: "3,752,321", household: "1,793,244", area: "438.23" }
    },
    "2025": {
        "12": { date: "2025年12月1日", population: "3,753,908", household: "1,793,808", area: "438.23" },
        "11": { date: "2025年11月1日", population: "3,755,127", household: "1,793,986", area: "438.23" },
        "10": { date: "2025年10月1日", population: "3,754,840", household: "1,792,729", area: "438.23" },
        "09": { date: "2025年9月1日", population: "3,772,320", household: "1,836,882", area: "438.23" },
        "08": { date: "2025年8月1日", population: "3,772,737", household: "1,836,843", area: "438.23" },
        "07": { date: "2025年7月1日", population: "3,773,476", household: "1,836,601", area: "438.23" },
        "06": { date: "2025年6月1日", population: "3,774,179", household: "1,835,664", area: "438.23" },
        "05": { date: "2025年5月1日", population: "3,774,447", household: "1,834,488", area: "438.23" },
        "04": { date: "2025年4月1日", population: "3,769,150", household: "1,827,978", area: "438.23" },
        "03": { date: "2025年3月1日", population: "3,764,821", household: "1,818,337", area: "438.23" },
        "02": { date: "2025年2月1日", population: "3,766,732", household: "1,818,320", area: "438.23" },
        "01": { date: "2025年1月1日", population: "3,769,584", household: "1,819,315", area: "438.23" }
    },
    "2024": {
        "12": { date: "2024年12月1日", population: "3,771,005", household: "1,819,632", area: "438.23" },
        "11": { date: "2024年11月1日", population: "3,772,123", household: "1,819,775", area: "438.23" },
        "10": { date: "2024年10月1日", population: "3,771,063", household: "1,817,762", area: "438.23" },
        "09": { date: "2024年9月1日", population: "3,770,960", household: "1,816,480", area: "438.23" },
        "08": { date: "2024年8月1日", population: "3,771,769", household: "1,816,409", area: "438.23" },
        "07": { date: "2024年7月1日", population: "3,772,190", household: "1,815,909", area: "438.01" },
        "06": { date: "2024年6月1日", population: "3,772,726", household: "1,814,803", area: "438.01" },
        "05": { date: "2024年5月1日", population: "3,773,050", household: "1,813,835", area: "438.01" },
        "04": { date: "2024年4月1日", population: "3,767,635", household: "1,807,344", area: "438.01" },
        "03": { date: "2024年3月1日", population: "3,764,961", household: "1,799,059", area: "438.01" },
        "02": { date: "2024年2月1日", population: "3,766,718", household: "1,799,225", area: "438.01" },
        "01": { date: "2024年1月1日", population: "3,769,220", household: "1,800,110", area: "438.01" }
    },
    "2023": {
        "12": { date: "2023年12月1日", population: "3,770,179", household: "1,800,294", area: "438.01" },
        "11": { date: "2023年11月1日", population: "3,771,611", household: "1,800,370", area: "438.01" },
        "10": { date: "2023年10月1日", population: "3,771,766", household: "1,799,480", area: "438.01" },
        "09": { date: "2023年9月1日", population: "3,772,440", household: "1,798,741", area: "438.01" },
        "08": { date: "2023年8月1日", population: "3,773,403", household: "1,798,832", area: "438.01" },
        "07": { date: "2023年7月1日", population: "3,773,602", household: "1,798,172", area: "438.01" },
        "06": { date: "2023年6月1日", population: "3,774,611", household: "1,797,824", area: "438.01" },
        "05": { date: "2023年5月1日", population: "3,774,180", household: "1,796,344", area: "438.01" },
        "04": { date: "2023年4月1日", population: "3,768,664", household: "1,790,597", area: "438.01" },
        "03": { date: "2023年3月1日", population: "3,765,271", household: "1,781,461", area: "438.01" },
        "02": { date: "2023年2月1日", population: "3,766,999", household: "1,781,426", area: "438.01" },
        "01": { date: "2023年1月1日", population: "3,769,595", household: "1,782,399", area: "438.01" }
    },
    "2022": {
        "12": { date: "2022年12月1日", population: "3,771,640", household: "1,783,097", area: "438.01" },
        "11": { date: "2022年11月1日", population: "3,772,421", household: "1,782,805", area: "437.78" },
        "10": { date: "2022年10月1日", population: "3,771,961", household: "1,781,879", area: "437.78" },
        "09": { date: "2022年9月1日", population: "3,772,887", household: "1,781,423", area: "437.78" },
        "08": { date: "2022年8月1日", population: "3,773,607", household: "1,781,296", area: "437.78" },
        "07": { date: "2022年7月1日", population: "3,773,673", household: "1,780,633", area: "437.78" },
        "06": { date: "2022年6月1日", population: "3,774,369", household: "1,779,834", area: "437.78" },
        "05": { date: "2022年5月1日", population: "3,773,214", household: "1,777,482", area: "437.78" },
        "04": { date: "2022年4月1日", population: "3,768,363", household: "1,772,142", area: "437.78" },
        "03": { date: "2022年3月1日", population: "3,766,056", household: "1,764,011", area: "437.78" },
        "02": { date: "2022年2月1日", population: "3,768,902", household: "1,764,924", area: "437.78" },
        "01": { date: "2022年1月1日", population: "3,772,029", household: "1,766,617", area: "437.78" }
    },
    "2021": {
        "12": { date: "2021年12月1日", population: "3773982", household: "1767422", area: "437.78" },
        "11": { date: "2021年11月1日", population: "3774936", household: "1767654", area: "437.78" },
        "10": { date: "2021年10月1日", population: "3775352", household: "1767218", area: "437.78" },
        "09": { date: "2021年9月1日", population: "3777436", household: "1768323", area: "437.78" },
        "08": { date: "2021年8月1日", population: "3778049", household: "1768468", area: "437.78" },
        "07": { date: "2021年7月1日", population: "3778564", household: "1768319", area: "437.78" },
        "06": { date: "2021年6月1日", population: "3779063", household: "1767713", area: "437.71" },
        "05": { date: "2021年5月1日", population: "3779446", household: "1767031", area: "437.71" },
        "04": { date: "2021年4月1日", population: "3775319", household: "1762612", area: "437.71" },
        "03": { date: "2021年3月1日", population: "3772457", household: "1754131", area: "437.71" },
        "02": { date: "2021年2月1日", population: "3774271", household: "1753846", area: "437.71" },
        "01": { date: "2021年1月1日", population: "3776286", household: "1754256", area: "437.71" }
    }
};

//横浜市歌
const SONG_LIST = {
    original: {
        title: "横濱市歌",
        button: "原文",
        lyricist: "森林太郎（鷗外）",
        composer: "南能衛",
        lyric: `
            <span>わが<ruby>日<rt>ひ</rt></ruby>の<ruby>本<rt>もと</rt></ruby>は<ruby>島國<rt>しまぐに</rt></ruby>よ</span>
            <span><ruby>朝日<rt>あさひ</rt>輝<rt>かゞよ</rt></ruby>ふ<ruby>海<rt>うみ</rt></ruby>に</span>
            <span><ruby>聯<rt>つらな</rt></ruby>り<ruby>峙<rt>そばだ</rt></ruby>つ<ruby>島々<rt>しま〲</rt></ruby>なれば</span>
            <span>あらゆる<ruby>國<rt>くに</rt></ruby>より<ruby>舟<rt>ふね</rt></ruby>こそ<ruby>通<rt>かよ</rt></ruby>へ</span>

            <span>されば<ruby>港<rt>みなと</rt></ruby>の<ruby>數<rt>かず</rt>多<rt>おゝ</rt></ruby>かれど</span>
            <span><ruby>此<rt>この</rt>横濱<rt>よこはま</rt></ruby>に<ruby>優<rt>まさ</rt></ruby>るあらめや</span>
            <span>むかし<ruby>思<rt>おも</rt></ruby>へば　<ruby>苫屋<rt>とまや</rt></ruby>の<ruby>烟<rt>けむり</rt></ruby></span>
            <span>ちらりほらりと<ruby>立<rt>た</rt></ruby>てりし<ruby>處<rt>ところ</rt></ruby></span>

            <span><ruby>今<rt>いま</rt></ruby>は<ruby>百舟<rt>もゝふね</rt></ruby><ruby>百千舟<rt>もゝちふね</rt></ruby></span>
            <span><ruby>泊<rt>とま</rt></ruby>る<ruby>處<rt>ところ</rt></ruby>ぞ<ruby>見<rt>み</rt></ruby>よや</span>
            <span><ruby>果<rt>はて</rt></ruby>なく<ruby>榮<rt>さか</rt></ruby>えて<ruby>行<rt>ゆ</rt></ruby>くらん<ruby>御代<rt>みよ</rt></ruby>を</span>
            <span><ruby>飾<rt>かざ</rt></ruby>る<ruby>寶<rt>たから</rt></ruby>も<ruby>入<rt>い</rt></ruby>り<ruby>來<rt>く</rt></ruby>る<ruby>港<rt>みなと</rt></ruby></span>
        `
    },
    modern: {
        title: "横浜市歌",
        button: "現代文",
        lyricist: "森林太郎（鴎外）",
        composer: "南能衛",
        lyric: `
            <span>わが<ruby>日<rt>ひ</rt></ruby>の<ruby>本<rt>もと</rt></ruby>は<ruby>島国<rt>しまぐに</rt></ruby>よ</span>
            <span><ruby>朝日<rt>あさひ</rt></ruby>かがよう<ruby>海<rt>うみ</rt></ruby>に</span>
            <span><ruby>連<rt>つらな</rt></ruby>りそばだつ<ruby>島々<rt>しまじま</rt></ruby>なれば</span>
            <span>あらゆる<ruby>国<rt>くに</rt></ruby>より<ruby>舟<rt>ふね</rt></ruby>こそ<ruby>通<rt>かよ</rt></ruby>え</span>

            <span>されば<ruby>港<rt>みなと</rt></ruby>の<ruby>数<rt>かず</rt>多<rt>おお</rt></ruby>かれど</span>
            <span>この<ruby>横浜<rt>よこはま</rt></ruby>にまさるあらめや</span>
            <span>むかし<ruby>思<rt>おも</rt></ruby>えば　とま<ruby>屋<rt>や</rt></ruby>の<ruby>煙<rt>けむり</rt></ruby></span>
            <span>ちらりほらりと<ruby>立<rt>た</rt></ruby>てりしところ</span>

            <span><ruby>今<rt>いま</rt></ruby>はもも<ruby>舟<rt>ふね</rt></ruby>もも<ruby>千<rt>ち</rt>舟<rt>ふね</rt></ruby></span>
            <span><ruby>泊<rt>とま</rt></ruby>るところぞ<ruby>見<rt>み</rt></ruby>よや</span>
            <span><ruby>果<rt>はて</rt></ruby>なく<ruby>栄<rt>さか</rt></ruby>えて<ruby>行<rt>ゆ</rt></ruby>くらんみ<ruby>代<rt>よ</rt></ruby>を</span>
            <span><ruby>飾<rt>かざ</rt></ruby>る<ruby>宝<rt>たから</rt></ruby>も<ruby>入<rt>い</rt></ruby>りくる<ruby>港<rt>みなと</rt></ruby></span>
        `
    }
};

function buildYearSelectHTML() {
    const years = Object.keys(DATA_LIST).sort().reverse(); // 最新年が上
    return [
        `<option value="new">最新</option>`,
        ...years.map(y => `<option value="${y}">${y}年</option>`)
    ].join("");
}
function buildMonthSelectHTML(year) {
    let months = Object.keys(DATA_LIST[year]).sort(); // 昇順 ["01","02",...]
    
    const latestYear = Object.keys(DATA_LIST).sort().slice(-1)[0];
    const latestMonth = Object.keys(DATA_LIST[latestYear]).sort().slice(-1)[0];

    // 最新年なら最新月を除外（＝前月まで）
    if (year === latestYear) {
        months = months.filter(m => m !== latestMonth);
    }

    return months
        .map(m => `<option value="${m}">${parseInt(m)}月</option>`)
        .join("");
}
function getLatest() {
    const years = Object.keys(DATA_LIST).sort();
    const latestYear = years.slice(-1)[0];

    const months = Object.keys(DATA_LIST[latestYear]).sort();
    const latestMonth = months.slice(-1)[0];

    return {
        year: latestYear,
        month: latestMonth,
        data: DATA_LIST[latestYear][latestMonth]
    };
}
function latestHTML() {
    const latestObj = getLatest();      // { year, month, data }
    const latest = latestObj.data;      // 最新データオブジェクト

    return `
        <h1>データ（${latest.date}）
            <select id="year-select">${buildYearSelectHTML()}</select>
            <select id="month-select" style="display:none;"></select>
        </h1>

        <dl>
            <dt>人口</dt>
            <dd>${latest.population}人</dd>
        </dl>
        <dl>
            <dt>世帯数</dt>
            <dd>${latest.household}世帯</dd>
        </dl>
        <dl>
            <dt>面積</dt>
            <dd>${latest.area}km²</dd>
        </dl>
    `;
}
function buildHTML(year, month) {
    const d = DATA_LIST[year][month];

    return `
        <h1>データ（${d.date})
            <select id="year-select">${buildYearSelectHTML()}</select>
            <select id="month-select">${buildMonthSelectHTML(year)}</select>
        </h1>

        <dl>
            <dt>人口</dt>
            <dd>${d.population}人</dd>
        </dl>
        <dl>
            <dt>世帯数</dt>
            <dd>${d.household}世帯</dd>
        </dl>
        <dl>
            <dt>面積</dt>
            <dd>${d.area}km²</dd>
        </dl>
    `;
}
document.addEventListener("input", function (e) {
    if (e.target.id === "year-select" || e.target.id === "month-select") {
        updateList();
    }
});
function getAvailableMonths(year) {
    const months = Object.keys(DATA_LIST[year]).sort();  // ["01"..."07"]

    // 最新年なら「最新月を除外」
    const latestYear = Object.keys(DATA_LIST).sort().slice(-1)[0];
    if (year === latestYear) {
        return months.slice(0, -1);  // ["01"..."06"]
    }

    return months;  // 2025, 2024 はそのまま
}
//状態保存
function saveSelection(year, month) {
    localStorage.setItem("dataYear", year);
    localStorage.setItem("dataMonth", month);
}
function updateList() {
    const tag = document.getElementById("data-list");

    const yearSelect = document.getElementById("year-select");
    const year = yearSelect ? yearSelect.value : "new";

    // ★ 最新表示
    if (year === "new") {
        tag.innerHTML = latestHTML();

        localStorage.setItem("dataYear", "new");
        localStorage.removeItem("dataMonth");

        return;
    }
    // ★ 月リスト（最新年は前月まで）
    let months = Object.keys(DATA_LIST[year]).sort();

    const latestYear = Object.keys(DATA_LIST).sort().slice(-1)[0];
    const latestMonth = Object.keys(DATA_LIST[latestYear]).sort().slice(-1)[0];

    if (year === latestYear) {
        months = months.filter(m => m !== latestMonth);
    }

    // ★ 月の決定（ユーザーが選んだ月を優先）
    let month;
    const oldMonthSelect = document.getElementById("month-select");

    if (oldMonthSelect && months.includes(oldMonthSelect.value)) {
        month = oldMonthSelect.value;   // ← これが重要
    } else {
        month = months.slice(-1)[0];    // ← デフォルトは最大月
    }

    // ★ 年月データ描画
    tag.innerHTML = buildHTML(year, month);

    // ★ buildHTML を描画した後に、新しい select を取り直す
    const newYearSelect = document.getElementById("year-select");
    const newMonthSelect = document.getElementById("month-select");

    newYearSelect.value = year;
    newMonthSelect.value = month;

    newMonthSelect.style.display = "inline-block";

    // 選択状態を保存
    saveSelection(year, month);
}

//横浜市歌
function getModes() {
    return Object.keys(SONG_LIST);
}

function getDefaultMode() {
    return getModes()[0];
}

function getNextMode(currentMode) {
    const modes = getModes();

    const index = modes.indexOf(currentMode);
    return modes[(index + 1) % modes.length];
}
function getNextButton(currentMode) {
    return SONG_LIST[getNextMode(currentMode)].button;
}
function buildSongHTML(mode) {
    const song = SONG_LIST[mode];
    const nextMode = getNextMode(mode);

    return `
        <h1>
            ${song.title}
            <span onclick="changeSong('${nextMode}')">
                ${song.button}
            </span>
        </h1>

        <dl>
            <dt>作詞</dt>
            <dd>${song.lyricist}</dd>
        </dl>

        <dl>
            <dt>作曲</dt>
            <dd>${song.composer}</dd>
        </dl>

        <pre>${song.lyric}</pre>
    `;
}
//状態保存
function changeSong(mode) {
    const songTag = document.getElementById("song");

    if (songTag) {
        songTag.innerHTML = buildSongHTML(mode);
    }

    saveSong(mode);
}
function saveSong(mode) {
    localStorage.setItem("songMode", mode);
}
function dataLoad() {
    const dataListTag = document.getElementById("data-list");
    if (dataListTag) dataListTag.innerHTML = latestHTML();

    const songTag = document.getElementById("song");

    const mode =
        localStorage.getItem("songMode") ||
        getDefaultMode();

    if (songTag) {
        songTag.innerHTML = buildSongHTML(mode);
    }
}
//状態リセット
function resetDataState() {

    // 保存していた状態を削除
    localStorage.removeItem("dataYear");
    localStorage.removeItem("dataMonth");
    localStorage.removeItem("songMode");

    // デフォルト表示
    dataLoad();
    updateList();
}

//読込
window.onload = function () {

    dataLoad();

    const savedYear = localStorage.getItem("dataYear");
    const savedMonth = localStorage.getItem("dataMonth");

    if (savedYear) {
        document.getElementById("year-select").value = savedYear;
    }

    updateList();

    if (savedYear && savedYear !== "new" && savedMonth) {
        document.getElementById("month-select").value = savedMonth;
        updateList();
    }
};