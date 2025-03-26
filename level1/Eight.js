const UserMessage = ({ role, status }) => {
    
    let message;
  
    if (role === "admin") {
      message = status === "active"? "Welcome, Admin! You have full access"
        : "Admin access is restricted. Please activate your account";
    } else {
      message = status === "active"? "Welcome, User! You have limited access"
        : "User access is restricted. Please contact support";
    }
  
    return (
      <div>
        <h2>{message}</h2>
      </div>
    );
  };
  
  export default function App() {
    return (
      <div className="App">
        <UserMessage role="admin" status="active" />
        <UserMessage role="admin" status="inactive" />
        <UserMessage role="user" status="active" />
        <UserMessage role="user" status="inactive" />
      </div>
    );
  }
  