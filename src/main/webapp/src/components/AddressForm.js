import React, { useState, useCallback } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const width = 500;
const height = 400;

const AddressForm = () => {
  const [addr, setAddr] = useState(sessionStorage.getItem('address'));
  const [buildingName, setBuildingName] = useState(sessionStorage.getItem('buildingName'));

  const onClickLink = useCallback(() => {
    /*global daum*/
    new daum.Postcode({
      oncomplete: function (data) {
        const selectedAddr = data.userSelectedType === 'R' ? data.roadAddress : data.jibunAddress;
        const selectedBuildingName = data.buildingName ? data.buildingName : '';

        sessionStorage.setItem('address', selectedAddr);
        sessionStorage.setItem('buildingName', selectedBuildingName);

        setAddr(selectedAddr);
        setBuildingName(selectedBuildingName);
      },
    }).open({
      left: Math.ceil((window.screen.width - width) / 2),
      top: Math.ceil((window.screen.height - height) / 2),
    });
  }, []);

  return (
    <div className="w-r-28.4 px-8 py-9 border text-r-1.6 font-bold">
      <p>
        <FaMapMarkerAlt className="inline-block mr-3" />
        배송지
      </p>
      {addr === null && (
        <div>
          <p>
            <span className="text-kp-600">배송지를 등록하고</span>
          </p>
          <p>
            <span className="block">구매 가능한 상품을 확인하세요!</span>
          </p>
        </div>
      )}
      {addr !== null && (
        <p className="pt-4 font-medium">
          <span>{`${addr} ${buildingName && '(' + buildingName + ')'}`}</span>
          <span className="block text-kp-600 text-r-1.4 pt-3"></span>
        </p>
      )}

      <div className="delivery-type">
        <span className="delivery-type-star"></span>
      </div>

      <p
        onClick={onClickLink}
        className="cursor-pointer mt-7 border rounded-r-0.4 border-kp-600 w-full h-14 text-r-1.2 text-kp-600 inline-block text-center leading-r-3.5 font-semibold"
        style={{
          color: 'purple', // Changed color to purple
          backgroundColor: 'white',
          border: '1px solid rgb(95, 0, 128)',
          height: '36px',
          margin: '25px 0px 0px', // Increased margin top
          fontWeight: '800', // Bolder font
          fontSize: '13px', // Increased font size
          width: '100%',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {addr === null ? (
          <>
            <FaSearch className="inline-block mr-3" />
            주소 검색
          </>
        ) : (
          <span>배송지 변경</span>
        )}
      </p>
    </div>
  );
};

export default AddressForm;





