const IsBrowser = (() => {
  if (typeof navigator == "undefined") return;

  const ua = navigator.userAgent;

  return {
    info: ua,

    Chrome() {
      return ua.indexOf("Chrome") > -1;
    },
    IE() {
      return ua.indexOf("MSIE") > -1 || ua.indexOf("rv:") > -1;
    },
    Firefox() {
      return ua.indexOf("Firefox") > -1;
    },
    Safari() {
      if (IsBrowser?.Chrome() && ua.indexOf("Safari") > -1) return false;
      else if (IsBrowser?.Firefox() && ua.indexOf("Safari") > -1) return false;
      else return true;
    },
    Opera() {
      if (IsBrowser?.Chrome() && ua.indexOf("Opera") > -1) return true;
      else return false;
    },

    any() {
      return (
        IsBrowser?.Chrome() ||
        IsBrowser?.IE() ||
        IsBrowser?.Firefox() ||
        IsBrowser?.Safari() ||
        IsBrowser?.Opera()
      );
    },
  };
})();

export default IsBrowser;
