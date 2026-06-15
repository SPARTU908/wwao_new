import React from "react";

const LanguageSwitcher = () => {
    const changeLanguage = (lang) => {
        const select = document.querySelector(".goog-te-combo");
        if (select) {
            select.value = lang;
            select.dispatchEvent(new Event("change"));
        }
    };

    return (
        <>
      
        <div className="language-dropdown">
            <select
                className="custom-lang-select"
                onChange={(e) => changeLanguage(e.target.value)}
            >
                <option value="">Select Language</option>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
            </select>
        </div>

        
          </>
    );
};

export default LanguageSwitcher;
