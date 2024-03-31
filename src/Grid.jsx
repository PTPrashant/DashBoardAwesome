import earningPhoto from "./earning.png";
import orderPhoto from "./orders.png";
import balancePhoto from "./balance.png";
import tradePhoto from "./trade.png";
import up from "./upArrow.png";
import down from "./downArrow.png";
// import graph from './graph2.png';
import graph from "./Capture.png";
import pieChart from "./pieChart.png";
import product1 from "./product1.png";
// import product2 from "./product2.png";

function Grid() {
  return (
    <div id="grid">
      <div className="container nav-bar">
        <h5 style={{ paddingLeft: "2rem" }}>Hello Prashant!</h5>

        <div>
          <input
            className="inputSearch"
            style={{
              height: "1.2rem",
              outline: "none",
              border: "none",
              marginRight: "1.5rem",
            }}
            placeholder="search"
          />
        </div>
      </div>

      {/*Currency Container 

    <div>
    
    </div>
    <div className="currency-inner"></div>*/}
      <div className="currency-container">
        <div className="card flex-row currency-inner">
          <img
            className="card-img-left example-card-img-responsive"
            style={{ height: "4rem", margin: "auto" }}
            src={earningPhoto}
          />
          <div
            style={{ paddingTop: "0", paddingBottom: "0" }}
            className="card-body"
          >
            <span
              className="card-text text-muted"
              style={{ fontSize: "0.7rem" }}
            >
              Earning
            </span>
            <h5
              className="card-title "
              style={{
                marginBottom: "0",
                fontWeight: "bold",
                fontSize: "1.3rem",
              }}
            >
              $198K
            </h5>
            <p className="card-text disabled" style={{ fontSize: "0.7rem" }}>
              <img src={up} style={{ height: "0.9rem" }} />
              <span style={{ color: "green", fontWeight: "bold" }}>
                37.8%
              </span>{" "}
              this month
            </p>
          </div>
        </div>

        <div className="card flex-row currency-inner">
          <img
            className="card-img-left example-card-img-responsive"
            style={{ height: "4rem", margin: "auto" }}
            src={orderPhoto}
          />
          <div
            style={{ paddingTop: "0", paddingBottom: "0" }}
            className="card-body"
          >
            <span
              className="card-text text-muted"
              style={{ fontSize: "0.7rem" }}
            >
              Orders
            </span>
            <h5 className="card-title " style={{ marginBottom: "0" }}>
              $2.4K
            </h5>
            <p className="card-text disabled" style={{ fontSize: "0.9rem" }}>
              <img src={down} style={{ height: "0.9rem" }} />
              <span style={{ color: "red", fontWeight: "bold" }}>2%</span> this
              month
            </p>
          </div>
        </div>

        <div className="card flex-row currency-inner">
          <img
            className="card-img-left example-card-img-responsive"
            style={{ height: "4rem", margin: "auto" }}
            src={balancePhoto}
          />
          <div
            style={{ paddingTop: "0", paddingBottom: "0" }}
            className="card-body"
          >
            <span
              className="card-text text-muted"
              style={{ fontSize: "0.7rem" }}
            >
              Balance
            </span>
            <h5 className="card-title " style={{ marginBottom: "0" }}>
              $2.4K
            </h5>
            <p className="card-text disabled" style={{ fontSize: "0.9rem" }}>
              <img src={down} style={{ height: "0.9rem" }} />
              <span style={{ color: "red", fontWeight: "bold" }}>2%</span> this
              month
            </p>
          </div>
        </div>

        <div className="card flex-row currency-inner">
          <img
            className="card-img-left example-card-img-responsive"
            style={{ height: "4rem", margin: "auto" }}
            src={tradePhoto}
          />
          <div
            style={{ paddingTop: "0", paddingBottom: "0" }}
            className="card-body"
          >
            <span
              className="card-text text-muted"
              style={{ fontSize: "0.7rem" }}
            >
              Total Sales
            </span>
            <h5 className="card-title " style={{ marginBottom: "0" }}>
              $89K
            </h5>
            <p className="card-text disabled" style={{ fontSize: "0.9rem" }}>
              <img src={up} style={{ height: "0.9rem" }} />
              <span style={{ color: "green", fontWeight: "bold" }}>
                11%
              </span>{" "}
              this month
            </p>
          </div>
        </div>
      </div>

      {/*  */}
      {/* 2nd  Container */}
      <div className="second-container">
        <div className="container-one">
          <div className="upperContainer">
            <div className="upperContainer-left">
              <h5 style={{ fontWeight: "bold", marginBottom: "0" }}>
                Overview
              </h5>
              <p style={{ fontSize: "0.7rem" }} className="text-muted">
                Monthly Earning
              </p>
            </div>

            <div className="upperContainer-right ">
              <p className="dropdown-toggle text-muted">Quaterly</p>
            </div>
          </div>

          <div className="lowerContainer"></div>
          <img style={{ height: "10rem", width: "100%" }} src={graph} />
        </div>

        <div className="container-two">
          <div>
            <h5 style={{ fontWeight: "bold", marginBottom: "0" }}>Customers</h5>
            <p style={{ fontSize: "0.7rem" }} className="text-muted">
              Customers that buy products
            </p>
          </div>

          <div className="pieChart">
            <img style={{ height: "10rem", width: "60%" }} src={pieChart} />
          </div>
        </div>
      </div>

      {/*  */}
      {/* 2nd  Container End*/}

      {/*  */}
      {/* 3rd  Container */}

      <div
        style={{ marginBottom: 0, borderBottom: 0, paddingBottom: 0 }}
        className="lower-container"
      >
        <div className="leftLower">
          <h5 style={{ fontWeight: "bold" }}>Product Sell</h5>
          <p style={{ fontSize: "0.7rem" }} className="text-muted">
            Monthly Earning
          </p>

          <div className="leftLower-scroll">
            <div style={{ borderColor: "white" }} className="card flex-row">
              <img
                className="card-img-left example-card-img-responsive"
                src={product1}
                style={{ height: "3rem", margin: "auto" }}
              />
              <div className="card-body">
                <h6 style={{ fontWeight: "bold" }} className="card-title ">
                  Food 1
                </h6>
                <p
                  style={{ fontSize: "0.7rem" }}
                  className="card-text text-disabled"
                >
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod{" "}
                </p>
              </div>
            </div>

            <div style={{ borderColor: "white" }} className="card flex-row">
              <img
                className="card-img-left example-card-img-responsive"
                src={product1}
                style={{ height: "3rem", margin: "auto" }}
              />
              <div className="card-body">
                <h6 style={{ fontWeight: "bold" }} className="card-title ">
                  Food 2
                </h6>
                <p
                  style={{ fontSize: "0.7rem" }}
                  className="card-text text-disabled"
                >
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod{" "}
                </p>
              </div>
            </div>
            <div style={{ borderColor: "white" }} className="card flex-row">
              <img
                className="card-img-left example-card-img-responsive"
                src={product1}
                style={{ height: "3rem", margin: "auto" }}
              />
              <div className="card-body">
                <h6 style={{ fontWeight: "bold" }} className="card-title ">
                  Food 3
                </h6>
                <p
                  style={{ fontSize: "0.7rem" }}
                  className="card-text text-disabled"
                >
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod{" "}
                </p>
              </div>
            </div>

            <div style={{ borderColor: "white" }} className="card flex-row">
              <img
                className="card-img-left example-card-img-responsive"
                src={product1}
                style={{ height: "3rem", margin: "auto" }}
              />
              <div className="card-body">
                <h6 style={{ fontWeight: "bold" }} className="card-title ">
                  Food 4
                </h6>
                <p
                  style={{ fontSize: "0.7rem" }}
                  className="card-text text-disabled"
                >
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rightLower">
          <div className="topShelf">
            <input
              className="inputSearch"
              style={{ height: "1.2rem", outline: "none", border: "none" }}
              placeholder="search"
            />
            <p
              className="dropdown-toggle text-muted"
              style={{ fontSize: "0.8rem" }}
            >
              last 30 days
            </p>

            {/*  
          <h5 style={{ fontWeight: "bold", marginBottom: "0" }}>Customers</h5>
          <p style={{ fontSize: "0.7rem" }} className="text-muted">
          Customers that buy products
          </p>
        */}
          </div>

          <table
            style={{ marginBottom: 0, borderBottom: 0, paddingBottom: 0 }}
            className=" table-borderless table"
          >
            <tbody>
              <tr style={{ fontSize: "0.7rem" }} className="text-muted">
                <td style={{ textAlign: "center" }}>stocks</td>
                <td style={{ textAlign: "center" }}>price</td>
                <td style={{ textAlign: "center" }}>total sales</td>
              </tr>

              <tr style={{ fontSize: "0.8rem" }} className="text-muted">
                <td style={{ textAlign: "center" }}>32 in stock</td>
                <td style={{ fontWeight: "bold", textAlign: "center" }}>
                  $35.99
                </td>
                <td style={{ textAlign: "center" }}>20</td>
              </tr>

              <tr style={{ fontSize: "0.8rem" }} className="text-muted">
                <td style={{ textAlign: "center" }}>32 in stock</td>
                <td style={{ fontWeight: "bold", textAlign: "center" }}>
                  $35.99
                </td>
                <td style={{ textAlign: "center" }}>20</td>
              </tr>


              <tr style={{ fontSize: "0.8rem" }} className="text-muted">
              <td style={{ textAlign: "center" }}>32 in stock</td>
              <td style={{ fontWeight: "bold", textAlign: "center" }}>
                $35.99
              </td>
              <td style={{ textAlign: "center" }}>20</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div></div>
      </div>

      {/* 3rd  Container End */}
    </div>
  );
}

export default Grid;
