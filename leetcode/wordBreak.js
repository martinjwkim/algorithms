const wordBreak = (s, wordDict) => {
  const map = {};
    function run(s) {
        if (map.hasOwnProperty(s)) {
            return map[s]
        } else if (s=='') {
            return true
        }
        for (let i=0;i<=s.length;i++) {
            if (
                wordDict.includes(s.slice(i)) &&
                run(s.slice(0, i))
            ){
                map[s] = true
                return true
            }
        }
        map[s] = false
        return false
    }
    return run(s)
}