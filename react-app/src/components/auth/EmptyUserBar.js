import LoginFormModal from "./LoginFormModal";
import './EmptyUserBar.css'
import SignUpFormModal from "./SignUpFormModal";

export default function EmptyUserBar() {
    return (
        <div className="empty-user-outer">
            <div>
                <h3>
                    Shop what you love -- faster and easier.
                </h3>
            </div>
            <div>
                <LoginFormModal /> or <SignUpFormModal />
            </div>
        </div>
    )
}
