const ngabeBugleSvg = new URL('../../img_test/srcProvincias/comarca_ngabe_bugle/nb.svg', import.meta.url).href;

export default function NgabeBugleSvg(props) {
  return <img src={ngabeBugleSvg} alt="Ngabe Bugle" {...props} />;
}
