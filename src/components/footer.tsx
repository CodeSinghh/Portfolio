"use client"
import { useState, useEffect } from 'react';

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="text-center py-6 mt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">&copy; {year} Cloud Chronicle Redux. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
