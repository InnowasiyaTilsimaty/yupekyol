import { colors } from "../styles/vars";
import Line from "../UI/Line";
import crosby1 from "../assets/img/crosby1.webp";
import crosby2 from "../assets/img/crosby2.webp";
import crosby3 from "../assets/img/crosby3.webp";
import crosby4 from "../assets/img/crosby4.webp";
import crosby5 from "../assets/img/crosby5.webp";
import kito1 from "../assets/img/kito1.webp";
import kito2 from "../assets/img/kito2.jpg";
import kito3 from "../assets/img/kito3.webp";
import kito4 from "../assets/img/kito4.webp";
import kito5 from "../assets/img/kito5.webp";
import point1 from "../assets/img/point1.jpg";
import point2 from "../assets/img/point2.jpg";
import point3 from "../assets/img/point3.webp";
import point4 from "../assets/img/point4.webp";
import point5 from "../assets/img/point5.webp";
import brunton1 from "../assets/img/brunton1.webp";
import brunton2 from "../assets/img/brunton2.webp";
import brunton3 from "../assets/img/brunton3.webp";
import brunton4 from "../assets/img/brunton4.webp";
import brunton5 from "../assets/img/brunton5.webp";
import gunnebo1 from "../assets/img/gunnebo1.jpg";
import gunnebo2 from "../assets/img/gunnebo2.jpg";
import gunnebo3 from "../assets/img/gunnebo3.jpg";
import gunnebo4 from "../assets/img/gunnebo4.jpg";
import gunnebo5 from "../assets/img/gunnebo5.jpg";
import wirelock1 from "../assets/img/wirelock1.webp";
import wirelock2 from "../assets/img/wirelock2.webp";
import wirelock3 from "../assets/img/wirelock3.webp";
import wirelock4 from "../assets/img/wirelock4.webp";
import wirelock5 from "../assets/img/wirelock5.webp";
import wool1 from "../assets/img/wool1.png";
import wool2 from "../assets/img/wool2.png";
import wool3 from "../assets/img/wool3.png";
import wool4 from "../assets/img/wool4.png";
import wool5 from "../assets/img/wool5.png";
import triton1 from "../assets/img/triton1.jpg";
import triton2 from "../assets/img/triton2.jpg";
import triton3 from "../assets/img/triton3.jpg";
import triton4 from "../assets/img/triton4.jpg";
import triton5 from "../assets/img/triton5.jpg";
import ispo1 from "../assets/img/ispo1.png"
import ispo2 from "../assets/img/ispo2.png"
import ispo3 from "../assets/img/ispo3.jpg"
import ispo4 from "../assets/img/ispo4.png"
import ispo5 from "../assets/img/ispo5.png"


export const tabs = [
  {
    name: "tab1",
    label: "The Crosby",
    render: () => {
      return (
        <div className="tabMainCol">
          <div className="tabTextside">
            <div className="tabTitle">
              <h3>Crosby</h3>
            </div>
            <div className="tabLine">
              <Line linecolor={colors.orange} />
            </div>
            <div className="tabText">
              <p>
                The Crosby brand has been trusted for hundreds of years. As the
                world’s leading manufacturer for rigging, lifting, and material
                handling applications, Crosby delivers the industry’s most
                comprehensive portfolio of products, engineered to exceed the
                toughest demands. We serve the land-based and offshore energy,
                construction and infrastructure, cargo handling and towing,
                marine, mining, and transportation industries
              </p>
            </div>
          </div>
          <div className="tabImageSide">
            <div className="tabImageGrid">
              <div className="image1">
                <img src={crosby1} alt="crosby1" />
              </div>
              <div className="image2">
                <img src={crosby2} alt="crosby2" />
              </div>
              <div className="image3">
                <img src={crosby3} alt="crosby3" />
              </div>
              <div className="image4">
                <img src={crosby4} alt="crosby4" />
              </div>
              <div className="image5">
                <img src={crosby5} alt="crosby5" />
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    name: "tab2",
    label: "KITO",
    render: () => {
      return (
        <div className="tabMainCol">
          <div className="tabTextside">
            <div className="tabTitle">
              <h3>KITO</h3>
            </div>
            <div className="tabLine">
              <Line linecolor={colors.orange} />
            </div>
            <div className="tabText">
              <p>
                Realizing safe workplaces is our never changing value. Kito
                works to build customer trust in our unique products and
                services, created to help build a more convenient and
                comfortable society.
              </p>
            </div>
          </div>
          <div className="tabImageSide">
            <div className="tabImageGrid">
              <div className="image1">
                <img src={kito1} alt="kito1" />
              </div>
              <div className="image2">
                <img src={kito2} alt="kito2" />
              </div>
              <div className="image3">
                <img src={kito3} alt="kito3" />
              </div>
              <div className="image4">
                <img src={kito4} alt="kito4" />
              </div>
              <div className="image5">
                <img src={kito5} alt="kito5" />
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    name: "tab3",
    label: "Straight point",
    render: () => {
      return (
        <div className="tabMainCol">
          <div className="tabTextside">
            <div className="tabTitle">
              <h3>Straight point</h3>
            </div>
            <div className="tabLine">
              <Line linecolor={colors.orange} />
            </div>
            <div className="tabText">
              <p>
                A UK load cell manufacturer, part of The Crosby Group, with
                locations in UK, Hampshire, USA, Tulsa and Belgium, Heist plus a
                global network of over 100 authorised distributors and
                $1,000,000 of inventory available, we deliver any catalogue
                product to any location in the world within days.
              </p>
            </div>
          </div>
          <div className="tabImageSide">
            <div className="tabImageGrid">
              <div className="image1">
                <img src={point1} alt="point1" />
              </div>
              <div className="image2">
                <img src={point2} alt="point2" />
              </div>
              <div className="image3">
                <img src={point3} alt="point3" />
              </div>
              <div className="image4">
                <img src={point4} alt="point4" />
              </div>
              <div className="image5">
                <img src={point5} alt="point5" />
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  {
    name: "tab4",
    label: "Ipso",
    render: () => {
      return (
        <div className="tabMainCol">
          <div className="tabTextside">
            <div className="tabTitle">
              <h3>Ipso</h3>
            </div>
            <div className="tabLine">
              <Line linecolor={colors.orange} />
            </div>
            <div className="tabText">
              <p>
                IPSO makes it easy for you to reliably get high volumes of
                high-quality laundry for the lowest cost. Our complete range of
                laundry solutions is designed to maximize your resources and
                deliver long-term high performance. IPSO equipment is developed
                in the world’s most sophisticated commercial laundry laboratory.
                Manufactured with high quality components, our machines thrive
                in the most demanding environment. IPSO solutions are proven
                through rigorous testing under real world conditions.
              </p>
            </div>
          </div>
          <div className="tabImageSide">
            <div className="tabImageGrid">
              <div className="image1">
                <img src={ispo5} alt="ispo1" />
              </div>
              <div className="image2">
                <img src={ispo2} alt="ispo2" />
              </div>
              <div className="image3">
                <img src={ispo3} alt="ispo3" />
              </div>
              <div className="image4">
                <img src={ispo4} alt="ispo4" />
              </div>
              <div className="image5">
                <img src={ispo1} alt="ispo5" />
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    name: "tab5",
    label: "Brunton Wolf",
    render: () => {
      return (
        <div className="tabMainCol">
          <div className="tabTextside">
            <div className="tabTitle">
              <h3>Brunton Wolf</h3>
            </div>
            <div className="tabLine">
              <Line linecolor={colors.orange} />
            </div>
            <div className="tabText">
              <p>
                In the dynamic business environment we find ourselves in, it is
                important for you to optimise your costs, and at the same time
                improve output. As specialists, Brunton Wire Ropes is geared to
                improve your productivity with advanced solutions, reduce your
                downtime with a smart supply chain, and optimise your costs with
                a value for money offering.
              </p>
            </div>
          </div>
          <div className="tabImageSide">
            <div className="tabImageGrid">
              <div className="image1">
                <img src={brunton1} alt="brunton1" />
              </div>
              <div className="image2">
                <img src={brunton2} alt="brunton2" />
              </div>
              <div className="image3">
                <img src={brunton3} alt="brunton3" />
              </div>
              <div className="image4">
                <img src={brunton4} alt="brunton4" />
              </div>
              <div className="image5">
                <img src={brunton5} alt="brunton5" />
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  {
    name: "tab6",
    label: "Gunnebo Ind.",
    render: () => {
      return (
        <div className="tabMainCol">
          <div className="tabTextside">
            <div className="tabTitle">
              <h3>Gunnebo Ind.</h3>
            </div>
            <div className="tabLine">
              <Line linecolor={colors.orange} />
            </div>
            <div className="tabText">
              <p>
                Gunnebo Industries is a global leading brand in the lifting and
                material handling industries. Well-known and innovative
                solutions, including chain and lifting components, shackles, and
                lashing products, are established in the market as premium
                quality that provide outstanding safety. Through the years,
                Gunnebo Industries products have become today’s standard.
              </p>
            </div>
          </div>
          <div className="tabImageSide">
            <div className="tabImageGrid">
              <div className="image1">
                <img src={gunnebo1} alt="gunnebo1" />
              </div>
              <div className="image2">
                <img src={gunnebo2} alt="gunnebo2" />
              </div>
              <div className="image3">
                <img src={gunnebo3} alt="gunnebo3" />
              </div>
              <div className="image4">
                <img src={gunnebo4} alt="gunnebo4" />
              </div>
              <div className="image5">
                <img src={gunnebo5} alt="gunnebo5" />
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    name: "tab7",
    label: "Wirelock",
    render: () => {
      return (
        <div className="tabMainCol">
          <div className="tabTextside">
            <div className="tabTitle">
              <h3>Wirelock</h3>
            </div>
            <div className="tabLine">
              <Line linecolor={colors.orange} />
            </div>
            <div className="tabText">
              <p>
                Over 50 years on, WIRELOCK® has required no reformulations since
                its conception and is the premier cold socketing compound
                distributed worldwide and used across five industrial sectors
                namely bridges, structures, off-shore, mining and general
                engineering. WIRELOCK® is manufactured in the UK to ISO 9001:
                2015 and meets the requirements of ISO17558 and DNV-OS-E304 and
                has Type Approval from ABS, DNV and Lloyds. To maintain our
                position in the market place we continue to have strong links
                with Universities and industry bodies. The WIRELOCK® brand has
                developed other variants to meet customer requirements –
                WIRELOCK® SLING, PARALOCK®, Umbilical Terminations.
              </p>
            </div>
          </div>
          <div className="tabImageSide">
            <div className="tabImageGrid">
              <div className="image1">
                <img src={wirelock1} alt="wirelock1" />
              </div>
              <div className="image2">
                <img src={wirelock2} alt="wirelock2" />
              </div>
              <div className="image3">
                <img src={wirelock3} alt="wirelock3" />
              </div>
              <div className="image4">
                <img src={wirelock4} alt="wirelock4" />
              </div>
              <div className="image5">
                <img src={wirelock5} alt="wirelock5" />
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    name: "tab8",
    label: "Fujeirah Rockwool",
    render: () => {
      return (
        <div className="tabMainCol">
          <div className="tabTextside">
            <div className="tabTitle">
              <h3>Fujeirah Rockwool</h3>
            </div>
            <div className="tabLine">
              <Line linecolor={colors.orange} />
            </div>
            <div className="tabText">
              <p>
                Fujairah Rockwool Factory is a subsidiary of Fujairah Building
                Industries PSC. Established in 1982, Fujairah Rockwool became
                the first manufacturer of Rockwool insulation in the GCC region,
                and the only one in the UAE. With humble beginnings from a
                5000-metric-ton factory, Fujairah Rockwool has continuously
                grown and expanded its operations to become one of the largest
                manufacturers of insulation products in the Middle East. Today
                FRF caters to a large customer base spread all over the Middle
                East, Far East and other parts of the world. To delight the
                customers, the R&D Department of Fujairah Rockwool is
                continuously striving to develop new product applications for
                this remarkably versatile product. The main objective of the
                company is to efficiently provide high-quality building
                materials to the local, regional, and global markets.
              </p>
            </div>
          </div>
          <div className="tabImageSide">
            <div className="tabImageGrid">
              <div className="image1">
                <img src={wool1} alt="wool1" />
              </div>
              <div className="image2">
                <img src={wool2} alt="wool2" />
              </div>
              <div className="image3">
                <img src={wool3} alt="wool3" />
              </div>
              <div className="image4">
                <img src={wool4} alt="wool4" />
              </div>
              <div className="image5">
                <img src={wool5} alt="wool5" />
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  {
    name: "tab9",
    label: "Triton",
    render: () => {
      return (
        <div className="tabMainCol">
          <div className="tabTextside">
            <div className="tabTitle">
              <h3>Triton</h3>
            </div>
            <div className="tabLine">
              <Line linecolor={colors.orange} />
            </div>
            <div className="tabText">
              <p>
                Triton manufactures stronger, safer, and sensible alternatives
                to traditional roofing and waterproofing technologies. We have
                become a go-to solutions adviser for many of the world’s most
                renowned industrial and institutional organizations, providing a
                customized approach to their building envelope needs, instead of
                one size fits all. Operating from our manufacturing headquarters
                in Cedar Rapids, Iowa with over 20 international distribution
                points, Triton’s award-winning design and engineering services
                are coupled with forward-thinking product technologies,
                including instant-set liquid rubbers and slip-resistant PVC
                membranes.
              </p>
            </div>
          </div>
          <div className="tabImageSide">
            <div className="tabImageGrid">
              <div className="image1">
                <img src={triton1} alt="triton1" />
              </div>
              <div className="image2">
                <img src={triton2} alt="triton2" />
              </div>
              <div className="image3">
                <img src={triton3} alt="triton3" />
              </div>
              <div className="image4">
                <img src={triton4} alt="triton4" />
              </div>
              <div className="image5">
                <img src={triton5} alt="triton5" />
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
];
