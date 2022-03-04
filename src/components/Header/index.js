import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { METHODS } from "../../services/api";

import { PATHS } from "../../constant";
import { NavLink } from "react-router-dom";
import { actions as userActions } from "../User/redux/action";
import { hasOneFrom } from "../../common/utils";
import "./styles.scss";

const AuthenticatedHeaderOption = () => {
  const [partnerId, setPartnerId] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(({ User }) => User);
  const rolesList = user.data.user.rolesList;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios({
      method: METHODS.GET,
      url: `${process.env.REACT_APP_MERAKI_URL}/users/me`,
      headers: {
        accept: "application/json",
        Authorization: user.data.token,
      },
    }).then((res) => {
      setPartnerId(res.data.user.partner_id);
    });
  }, []);

  const partnerGroupId = user.data.user.partner_group_id;

  const canSpecifyPartnerGroupId =
    hasOneFrom(rolesList, ["admin", "partner", "partner_view"]) &&
    user.data.user.partner_group_id;

  const canSpecifyUserBaseRole = rolesList.indexOf("admin") > -1;

  const canSpecifyPartner =
    hasOneFrom(rolesList, ["partner", "partner_view", "partner_edit"]) &&
    partnerId != null;

  return (
    <>
      {canSpecifyUserBaseRole ? (
        <>
          <NavLink className="item" to={PATHS.USER} activeClassName="current">
            User
          </NavLink>

          <NavLink
            className="item"
            to={PATHS.VOLUNTEER}
            activeClassName="current"
          >
            Volunteers
          </NavLink>
          <NavLink
            className="item"
            to={PATHS.PARTNERS}
            activeClassName="current"
          >
            Partners
          </NavLink>
        </>
      ) : null}

      {canSpecifyPartnerGroupId || canSpecifyPartner ? (
        <>
          <a
            className="item"
            href={
              canSpecifyPartnerGroupId
                ? `${PATHS.STATE}/${partnerGroupId}`
                : `${PATHS.PARTNERS}/${partnerId}`
            }
          >
            Dashboard
          </a>
        </>
      ) : null}

      {["COURSE", "MENTOR", "CLASS", "ADMISSION", "OPPORTUNITIES", "AFE"].map(
        (item) => (
          <MenuOption
            item={item}
            className={
              ["COURSE", "MENTOR", "CLASS"].includes(item)
                ? "left-item"
                : "item"
            }
          />
        )
      )}

      <a>
        <i
          class="fa fa-user-circle-o profile-icon"
          onClick={() => setOpen(!open)}
        ></i>
      </a>
      {open && (
        <div className="dropdown-wrapper">
          <ul className="dropdown-menu">
            <li className="dropdown-menu__item">
              <a className="item" href={PATHS.PROFILE}>
                Profile
              </a>
            </li>
            <li className="dropdown-menu__item">
              <a
                className="logout-btn"
                onClick={() => dispatch(userActions.logout())}
              >
                {" "}
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

const AuthenticatedLeftHeaderOption = () => {
  return (
    <>
      {["COURSE", "MENTOR", "CLASS"].map((item) => (
        <MenuOption item={item} className="item" />
      ))}
    </>
  );
};

const PublicMenuOption = () => {
  return (
    <>
      <NavLink className="item" to={PATHS.AFE} activeClassName="current">
        Amazon Partnership
      </NavLink>
      <NavLink className="item" to={PATHS.LOGIN} activeClassName="current">
        Login/Signup
      </NavLink>
    </>
  );
};

const PublicLeftMenuOption = () => {
  return (
    <NavLink className="item" to={PATHS.COURSE} activeClassName="current">
      Courses
    </NavLink>
  );
};

const MenuOption = (props) => {
  const NAMES = {
    COURSE: "Courses",
    MENTOR: "Mentors",
    CLASS: "Classes",
    ADMISSION: "Admission",
    OPPORTUNITIES: "Opportunities",
    AFE: "Amazon Partnership",
  };
  return (
    <NavLink
      className={props.className}
      to={PATHS[props.item]}
      activeClassName="current"
    >
      {NAMES[props.item]}
    </NavLink>
  );
};

function Header() {
  const { data } = useSelector(({ User }) => User);
  const isAuthenticated = data && data.isAuthenticated;

  return (
    <div className="ng-header ">
      <input type="checkbox" id="nav-check" />
      <div className="logo">
        <a href="/">
          <div className="meraki-logo" />
        </a>

        <div className="option">
          {isAuthenticated ? (
            <AuthenticatedLeftHeaderOption />
          ) : (
            <PublicLeftMenuOption />
          )}
        </div>
      </div>

      <div className="dropDown-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="option">
        {isAuthenticated ? <AuthenticatedHeaderOption /> : <PublicMenuOption />}
      </div>
    </div>
  );
}

export default Header;
