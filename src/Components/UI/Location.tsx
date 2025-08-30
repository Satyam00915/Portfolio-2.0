import styled from "styled-components";

const Location = () => {
  return (
    <StyledWrapper>
      <div className="center-body">
        <div className="loader-shape-3" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .center-body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader-shape-3 {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
  }
  .loader-shape-3:before {
    width: 10px;
    height: 10px;
    border-radius: 100% 100% 100% 0;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 1);
    animation: anm-SL-3-move 1s linear infinite;
    top: 50%;
    left: 50%;
    background: gray;
    transform: translate(-50%, -50%) rotate(-46deg);
    margin-top: 20px;
  }
  .loader-shape-3:before,
  .loader-shape-3:after {
    position: absolute;
    content: "";
  }
  @keyframes anm-SL-3-move {
    0% {
      top: 0;
    }
    50% {
      top: -5px;
    }
    100% {
      top: 0;
    }
  }
`;

export default Location;
