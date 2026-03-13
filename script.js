function initApp() {

    // ----- In-page category navigation (index.html) -----
    const views = document.querySelectorAll('.app-view[data-view]');
    if (views.length > 0) {
        const clearHash = () => {
            // removes trailing "#" from file:///.../index.html#
            history.replaceState(null, '', window.location.pathname + window.location.search);
        };

        const viewExists = (name) => {
            return document.querySelector(`.app-view[data-view="${String(name).replace(/["\\]/g, '\\$&')}"]`);
        };

        const getViewFromHash = () => {
            // handle both "" and "#"
            if (!window.location.hash || window.location.hash === '#') return 'home';
            const raw = window.location.hash.replace(/^#/, '');
            return viewExists(raw) ? raw : 'home';
        };

        const setActiveView = (name) => {
            views.forEach(v => v.classList.toggle('active', v.getAttribute('data-view') === name));
            window.scrollTo(0, 0);
        };

        if (window.location.hash === '#') clearHash();
        setActiveView(getViewFromHash());

        window.addEventListener('hashchange', () => {
            if (window.location.hash === '#') {
                clearHash();
                setActiveView('home');
                return;
            }
            setActiveView(getViewFromHash());
        });

        document.addEventListener('click', (e) => {
            const target = e.target instanceof Element ? e.target : null;
            if (!target) return;

            const back = target.closest('[data-back]');
            if (back) {
                e.preventDefault();
                clearHash();
                setActiveView('home');
                return;
            }

            const nav = target.closest('[data-view-target]');
            if (nav) {
                const isPrimaryClick = e.button === 0;
                const hasModifier = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
                if (!isPrimaryClick || hasModifier) return;

                const next = nav.getAttribute('data-view-target');
                if (!next) return;
                e.preventDefault();
                window.location.hash = next;
            }
        });
    }

    // Custom Location Dropdown Logic
    const locationBtn = document.getElementById('locationBtn');
    const locationMenu = document.getElementById('locationMenu');
    const selectedLocationText = document.getElementById('selectedLocation');

    if (locationBtn && locationMenu) {
        // Toggle dropdown
        locationBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            locationMenu.classList.toggle('show');
        });

        // Handle item selection
        const dropdownItems = locationMenu.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', () => {
                // Update active class
                dropdownItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                // Update text
                selectedLocationText.textContent = item.textContent;

                // Close menu
                locationMenu.classList.remove('show');
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!locationBtn.contains(e.target) && !locationMenu.contains(e.target)) {
                locationMenu.classList.remove('show');
            }
        });
    }

    // Orders Tab Logic
    const tabBtns = document.querySelectorAll('.tab-item');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabBtns.length > 0 && tabPanes.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                tabBtns.forEach(b => b.classList.remove('active'));

                // Add active class to clicked button
                btn.classList.add('active');

                // Hide all panes
                tabPanes.forEach(pane => {
                    pane.style.display = 'none';
                    pane.classList.remove('active');
                });

                // Show target pane
                const targetId = btn.getAttribute('data-target');
                const targetPane = document.getElementById(targetId);
                if (targetPane) {
                    targetPane.style.display = 'block';
                    targetPane.classList.add('active');
                }
            });
        });
    }

    // Handle logout button click
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            alert('Logging out...');
        });
    }

    // Cancel Modal Logic
    const btnCancelActive = document.getElementById('btnCancelActive');
    const cancelModal = document.getElementById('cancelModal');
    const btnKeepService = document.getElementById('btnKeepService');
    const btnConfirmCancel = document.getElementById('btnConfirmCancel');

    if (btnCancelActive && cancelModal) {
        // Show modal when cancel button is clicked
        btnCancelActive.addEventListener('click', () => {
            cancelModal.classList.add('show');
        });

        // Hide modal when Keep Appointment is clicked
        if (btnKeepService) {
            btnKeepService.addEventListener('click', () => {
                cancelModal.classList.remove('show');
            });
        }

        // Handle the actual cancellation
        if (btnConfirmCancel) {
            btnConfirmCancel.addEventListener('click', () => {
                cancelModal.classList.remove('show');
                // Could move card to cancelled tab here in the future
                alert('Service successfully cancelled.');
            });
        }

        // Also close modal if clicking outside the content box
        cancelModal.addEventListener('click', (e) => {
            if (e.target === cancelModal) {
                cancelModal.classList.remove('show');
            }
        });
    }

    // Add Business Page Logic
    const categoryBtn = document.getElementById('categoryBtn');
    const categoryMenu = document.getElementById('categoryMenu');
    const selectedCategory = document.getElementById('selectedCategory');
    const businessForm = document.getElementById('businessForm');
    const successModal = document.getElementById('successModal');
    const btnCloseSuccessModal = document.getElementById('btnCloseSuccessModal');

    // Category Dropdown Toggle
    if (categoryBtn && categoryMenu) {
        categoryBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            categoryMenu.classList.toggle('show');
        });

        // Handle Item Selection
        const categoryItems = categoryMenu.querySelectorAll('.dropdown-item');
        categoryItems.forEach(item => {
            item.addEventListener('click', () => {
                categoryItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                selectedCategory.textContent = item.textContent;
                selectedCategory.classList.remove('placeholder');

                categoryMenu.classList.remove('show');
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!categoryBtn.contains(e.target) && !categoryMenu.contains(e.target)) {
                categoryMenu.classList.remove('show');
            }
        });
    }

    // Form Submission Modal Logic
    if (businessForm && successModal) {
        businessForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop normal submission
            successModal.classList.add('show');
        });

        if (btnCloseSuccessModal) {
            btnCloseSuccessModal.addEventListener('click', () => {
                successModal.classList.remove('show');
                businessForm.reset(); // clear the form
                if (selectedCategory) {
                    selectedCategory.textContent = 'Select category';
                    selectedCategory.classList.add('placeholder');
                }
            });
        }
    }

    // --- Profile Page Modals Logic ---

    // Edit Profile
    const btnEditProfile = document.getElementById('btnEditProfile');
    const editProfileModal = document.getElementById('editProfileModal');
    const btnCloseEditProfile = document.getElementById('btnCloseEditProfile');
    const editProfileForm = document.getElementById('editProfileForm');

    if (btnEditProfile && editProfileModal) {
        btnEditProfile.addEventListener('click', () => {
            editProfileModal.classList.add('show');
        });

        if (btnCloseEditProfile) {
            btnCloseEditProfile.addEventListener('click', () => {
                editProfileModal.classList.remove('show');
            });
        }

        if (editProfileForm) {
            editProfileForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Profile updated successfully!');
                editProfileModal.classList.remove('show');
            });
        }

        editProfileModal.addEventListener('click', (e) => {
            if (e.target === editProfileModal) {
                editProfileModal.classList.remove('show');
            }
        });
    }

    // Empty States
    const linkSavedAddresses = document.getElementById('linkSavedAddresses');
    const linkSavedProviders = document.getElementById('linkSavedProviders');
    const emptyStateModal = document.getElementById('emptyStateModal');
    const btnCloseEmptyState = document.getElementById('btnCloseEmptyState');
    const emptyStateTitle = document.getElementById('emptyStateTitle');
    const emptyStateMessage = document.getElementById('emptyStateMessage');

    if (emptyStateModal) {
        const showEmptyState = (title, message) => {
            if (emptyStateTitle && emptyStateMessage) {
                emptyStateTitle.textContent = title;
                emptyStateMessage.textContent = message;
            }
            emptyStateModal.classList.add('show');
        };

        if (linkSavedAddresses) {
            linkSavedAddresses.addEventListener('click', (e) => {
                e.preventDefault();
                showEmptyState('No Saved Addresses Yet', 'You haven\'t added any home or work addresses to your profile.');
            });
        }

        const savedProvidersModal = document.getElementById('savedProvidersModal');
        const savedProvidersList = document.getElementById('savedProvidersList');
        const btnCloseSavedProviders = document.getElementById('btnCloseSavedProviders');

        if (linkSavedProviders) {
            linkSavedProviders.addEventListener('click', (e) => {
                e.preventDefault();
                let providers = [];
                try {
                    providers = JSON.parse(localStorage.getItem('savedProviders')) || [];
                } catch(err) {}

                if (providers.length === 0) {
                    showEmptyState('No Saved Providers Yet', 'You haven\'t saved any favorite service providers yet. Check out the homepage!');
                } else if (savedProvidersModal && savedProvidersList) {
                    let htmlList = '';
                    providers.forEach(p => {
                        const bgColor = p.colorInfo?.bg || '#e2e8f0';
                        const textColor = p.colorInfo?.text || '#2563eb';
                        htmlList += `
                            <div style="display: flex; gap: 12px; padding: 12px; background: var(--bg-light); border-radius: 12px; border: 1px solid var(--icon-bg-gray); align-items: center; cursor: pointer;" onclick="location.href='service_detail.html?id=${p.id}'">
                                <div style="min-width: 48px; height: 48px; border-radius: 50%; background: ${bgColor}; color: ${textColor}; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">
                                    <i class="fa-solid ${p.icon || 'fa-bolt'}"></i>
                                </div>
                                <div style="flex: 1;">
                                    <h4 style="margin: 0 0 4px 0; font-size: 0.95rem; color: var(--text-dark);">${p.title}</h4>
                                    <div style="display: flex; gap: 8px; font-size: 0.8rem; color: var(--text-light);">
                                        <span><i class="fa-solid fa-star" style="color:#fbbf24;"></i> ${p.rating}</span>
                                        <span><i class="fa-solid fa-location-dot"></i> ${p.location || 'Colombo'}</span>
                                    </div>
                                </div>
                                <i class="fa-solid fa-chevron-right text-light"></i>
                            </div>
                        `;
                    });
                    savedProvidersList.innerHTML = htmlList;
                    savedProvidersModal.classList.add('show');
                }
            });
        }
        
        if (btnCloseSavedProviders && savedProvidersModal) {
            btnCloseSavedProviders.addEventListener('click', () => {
                savedProvidersModal.classList.remove('show');
            });
            savedProvidersModal.addEventListener('click', (e) => {
                if (e.target === savedProvidersModal) savedProvidersModal.classList.remove('show');
            });
        }

        if (btnCloseEmptyState) {
            btnCloseEmptyState.addEventListener('click', () => {
                emptyStateModal.classList.remove('show');
            });
        }

        emptyStateModal.addEventListener('click', (e) => {
            if (e.target === emptyStateModal) {
                emptyStateModal.classList.remove('show');
            }
        });
    }

    // Settings
    const linkSettings = document.getElementById('linkSettings');
    const settingsModal = document.getElementById('settingsModal');
    const btnCloseSettings = document.getElementById('btnCloseSettings');

    if (linkSettings && settingsModal) {
        linkSettings.addEventListener('click', (e) => {
            e.preventDefault();
            settingsModal.classList.add('show');
        });

        if (btnCloseSettings) {
            btnCloseSettings.addEventListener('click', () => {
                settingsModal.classList.remove('show');
            });
        }

        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) {
                settingsModal.classList.remove('show');
            }
        });
    }

    // --- New Modals Logic ---
    const setupModal = (btnId, modalId, closeBtnId) => {
        const btn = document.getElementById(btnId);
        const modal = document.getElementById(modalId);
        const closeBtn = document.getElementById(closeBtnId);

        if (btn && modal) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('show');
            });

            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    modal.classList.remove('show');
                });
            }

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('show');
                }
            });
        }
    };

    // Notifications
    setupModal('linkNotifications', 'notificationsModal', 'btnCloseNotifications');

    // Help & Support
    setupModal('linkHelpCenter', 'helpCenterModal', 'btnCloseHelpCenter');
    setupModal('linkTerms', 'termsModal', 'btnCloseTerms');
    setupModal('linkPrivacy', 'privacyModal', 'btnClosePrivacy');

    // Settings Sub-Modals
    setupModal('btnOpenSecurity', 'securityModal', 'btnCloseSecurity');
    setupModal('btnOpenNotificationPrefs', 'notificationPrefsModal', 'btnCloseNotificationPrefs');

    // New Settings Modals
    setupModal('btnOpenPrivacy', 'privacySettingsModal', 'btnClosePrivacySettings');
    setupModal('btnOpenLanguage', 'languageModal', 'btnCloseLanguage');

    // Language Selection Logic
    const languageRadios = document.querySelectorAll('input[name="language"]');
    const currentLanguageDisplay = document.getElementById('currentLanguageDisplay');
    const languageModal = document.getElementById('languageModal');

    if (languageRadios.length > 0 && currentLanguageDisplay && languageModal) {
        languageRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                if (e.target.checked) {
                    currentLanguageDisplay.textContent = e.target.value;
                    setTimeout(() => {
                        languageModal.classList.remove('show');
                    }, 300); // Close after a short delay for UX
                }
            });
        });
    }

    // Global Dark Mode Initialization
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    // Dark Mode Toggle Logic (on profile page)
    const btnDarkModeToggle = document.getElementById('btnDarkModeToggle');
    if (btnDarkModeToggle) {
        btnDarkModeToggle.checked = isDarkMode;

        btnDarkModeToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'true');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'false');
            }
        });
    }

    // Profile Picture Upload Logic
    const profileImgUpload = document.getElementById('profileImgUpload');
    if (profileImgUpload) {
        profileImgUpload.addEventListener('change', (e) => {
            if (e.target.files && e.target.files.length > 0) {
                alert(`Profile picture updated to: ${e.target.files[0].name}`);
                // In a real app, you would read the file as a data URL and set it as the avatar background.
            }
        });
    }

    // Global Form Validation Setup
    document.addEventListener('submit', function(e) {
        if (!e.target || e.target.tagName !== 'FORM') return;
        const requiredInputs = e.target.querySelectorAll('input:required:not([type="hidden"]):not([type="file"]):not([type="submit"]), select:required, textarea:required');
        for (let input of requiredInputs) {
            // Check if element is visible and empty
            if (input.offsetParent !== null && !input.value.trim()) {
                e.preventDefault(); // Stop submission
                alert('Please ensure all required fields are completed before proceeding.');
                return;
            }
        }
    });

}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
