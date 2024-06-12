// import QrReader from "react-qr-reader";

export default function Qr() {
  const handleScan = (data, error) => {
    console.log(data);
  };
  return <div>{/* <QrReader onResult={handleScan} /> */}</div>;
}
