import './SideBar.css';

interface ISideBarProps {
    children?: any;
}

const SideBar = (props: ISideBarProps) => (
    <div className="sidebar">
        {props.children}
    </div>
);

export default SideBar;
