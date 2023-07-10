import React from "react";
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function Nobel() {
    const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div>
     <div className="Head_Nobel">
     Nobel Prize
     </div>
      
      <div className="Details_Nobel">
        <div className="Details_Filters">
        <Form.Select aria-label="โปรดเลือก ค.ศ." className="select_AD">
      <option>โปรดเลือก ค.ศ.</option>
      <option value="1901">1901</option>
      <option value="1902">1902</option>
      <option value="1903">1903</option>
      <option value="1904">1904</option>
      <option value="1905">1905</option>
      <option value="1906">1906</option>
      <option value="1907">1907</option>
      <option value="1908">1908</option>
      <option value="1909">1909</option>
    </Form.Select>
    <Button className="Button_Apply"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : 'Apply Filter'}
    </Button>
            </div>
        <div className="Details_Nobel_Prize">
          <p> Details_Nobel_Prize Details_Nobel_Prize Details_Nobel_Prize Details_Nobel_Prize Details_Nobel_Prize Details_Nobel_Prize Details_Nobel_Prize Details_Nobel_Prize </p>
          </div>
      </div>
    </div>
  );
}
