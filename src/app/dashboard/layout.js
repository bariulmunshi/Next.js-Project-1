import Sidebar from "./Sidebar";

export const metadata = {
    title: 'Dashboard Next Hero',
    description: 'Hero Next',
  }
const DashboardLayout = ({children}) => {
    return (
        <div className="flex container mx-auto">
            <Sidebar/>
            {children}
        </div>
    );
};

export default DashboardLayout;