const appTypes = {
  sms: {
    id: 'sms', icon: '✉', title: 'سامانه مدیریت پیامک', family: 'ارتباطات سازمانی', stack: 'Python · Flask',
    entry: 'login', nav: [
      ['داشبورد', 'dashboard'], ['ورود اطلاعات', 'data'], ['گزارشات', 'reports'],
      ['مالی', 'finance'], ['پیگیری', 'followup'], ['رویدادها', 'logs'], ['مدیریت', 'admin']
    ]
  },
  budget: {
    id: 'budget', icon: '◈', title: 'سامانه بودجه‌ریزی عملیاتی', family: 'مدیریت عملکرد و بودجه', stack: 'Laravel · Vue 3 · TypeScript',
    entry: 'login', groups: [
      ['کار روزمره', [['داشبورد', 'dashboard'], ['تأیید گزارش‌ها', 'approvals'], ['پیام‌ها', 'notifications'], ['پروفایل', 'profile']]],
      ['برنامه و بودجه', [['دوره‌های بودجه', 'cycles'], ['ساختار عملیاتی', 'strategy'], ['تخصیص زیرفعالیت', 'assignments'], ['گزارش‌ها', 'reports'], ['آمار و نمودارها', 'statistics']]],
      ['مالی', [['حقوق ماهانه', 'salaries']]],
      ['سازمان', [['واحدهای سازمانی', 'units'], ['کارکنان', 'employees'], ['انتقال کارمند', 'transfers']]],
      ['مدیریت سامانه', [['ورود ساختار', 'structure-import'], ['حساب‌های ورود', 'users'], ['تنظیمات سامانه', 'settings'], ['رویدادنگاری', 'audit']]]
    ]
  },
  food: {
    id: 'food', icon: '▦', title: 'انباردار هوشمند', family: 'مدیریت انبار و مواد غذایی', stack: 'React 19 · Laravel 12',
    entry: 'login', nav: [
      ['داشبورد', 'dashboard'], ['موجودی‌ها', 'inventory'], ['دریافت و ورود', 'receipts'], ['مصرف و خروج', 'consumptions'],
      ['درخواست تخصیص', 'allocations'], ['سفارشات خرید', 'purchase-orders'], ['رزرو غذا', 'reservations'],
      ['منو و دستورپخت', 'recipes'], ['انبارگردانی', 'stocktakes'], ['گزارش‌ها', 'reports'], ['ردپای عملیات', 'audit-logs'],
      ['تنظیمات', 'settings'], ['مدیریت کاربران', 'users']
    ]
  },
  arbitration: {
    id: 'arbitration', icon: '⚖', title: 'درگاه خدمات داوری', family: 'خدمات و پیگیری پرونده', stack: 'Vue 3 · Django REST',
    entry: 'home', nav: [
      ['خانه', 'home'], ['معرفی', 'about'], ['خدمات', 'services'], ['اخبار', 'news'], ['هزینه', 'fees'],
      ['فرآیند', 'process'], ['شرط‌ها', 'clauses'], ['داوران', 'arbitrators'], ['قوانین', 'rules'], ['تماس', 'contact']
    ]
  },
  portal: {
    id: 'portal', icon: '⌂', title: 'پورتال خدمات سازمانی', family: 'خدمات اعضا و کسب‌وکارها', stack: 'TanStack Start · TypeScript · Supabase',
    entry: 'home', groups: [
      ['خدمات و سامانه‌ها', [['خدمات اعضا', 'services'], ['سامانه‌های یکپارچه', 'systems'], ['بانک اعضا', 'members'], ['نوبت‌دهی مشاوره', 'appointments'], ['دایرکتوری بنگاه‌ها', 'directory']]],
      ['اقتصاد و پژوهش', [['دیده‌بان اقتصاد', 'economy'], ['تجارت بین‌الملل', 'trade'], ['کمیسیون‌های تخصصی', 'commissions'], ['پژوهش و گزارش‌ها', 'research'], ['پایش کسب‌وکار', 'surveys']]],
      ['اخبار و رسانه', [['اخبار و رویدادها', 'news'], ['پورتال زعفران', 'saffron'], ['بخشنامه‌ها', 'announcements'], ['جلسات و مصوبات', 'meetings'], ['گفتمان اقتصادی', 'forum'], ['مرکز آموزش', 'education']]],
      ['درباره و مدیریت', [['درباره سازمان', 'about'], ['تشکل‌های اقتصادی', 'organizations'], ['اموال و امکانات', 'assets'], ['ارتباط با ما', 'contact'], ['اعلان‌ها', 'notifications'], ['گزارش حسابرسی', 'audit'], ['داشبورد مدیریتی', 'dashboard'], ['راهنمای استفاده', 'guide'], ['پنل مدیریت محتوا', 'admin']]]
    ]
  }
};

const pages = {
  sms: {
    dashboard: {title:'داشبورد',desc:'نمای کلی پیام‌های ارسالی و وضعیت سرویس',stats:[['ارسال امروز','۲٬۸۴۰','پیام'],['تحویل موفق','۹۸٫۶٪','نرخ تحویل'],['در صف ارسال','۱۲۶','پیام'],['اعتبار پنل','۴۸٬۲۰۰','پیامک']],table:'فعالیت اخیر',cols:['عنوان','گروه','تعداد','وضعیت'],rows:[['یادآوری موعد','مخاطبان نمونه','۱٬۲۴۰','ارسال‌شده'],['اطلاع‌رسانی رویداد','اعضای نمونه','۸۶۰','در حال ارسال'],['پیام خوشامد','کاربران تازه','۴۲۰','ارسال‌شده']],actions:['مشاهده گزارش']},
    data: {title:'ورود اطلاعات',desc:'بارگذاری فایل و آماده‌سازی فهرست مخاطبان',table:'ورودی‌های اخیر',cols:['نام فایل نمونه','تاریخ ثبت','تعداد ردیف','وضعیت'],rows:[['مخاطبان بهار.xlsx','امروز · ۰۹:۱۵','۲۴۰','پردازش شد'],['فهرست رویداد.xlsx','دیروز · ۱۴:۳۰','۱۸۰','پردازش شد']],actions:['شروع ورود آزمایشی']},
    reports: {title:'گزارشات',desc:'گزارش ارسال، تحویل و عملکرد در بازه‌ی انتخابی',stats:[['کل ارسال','۱۲٬۶۴۰','پیام'],['تحویل موفق','۱۲٬۳۷۰','پیام'],['ناموفق','۲۷۰','پیام'],['میانگین تحویل','۹۷٫۸٪','درصد']],table:'خلاصه‌ی کمپین‌ها',cols:['کمپین','ارسال','تحویل','تحویل موفق'],rows:[['اطلاع‌رسانی ماهانه','۵٬۳۱۰','۵٬۲۲۴','۹۸٫۴٪'],['یادآوری اعضا','۴٬۲۱۰','۴٬۱۰۲','۹۷٫۴٪'],['رویداد نمونه','۳٬۱۲۰','۳٬۰۴۴','۹۷٫۶٪']]},
    finance: {title:'مالی',desc:'خلاصه‌ی شارژ و مصرف اعتبار پنل',stats:[['اعتبار فعلی','۴۸٬۲۰۰','پیامک'],['مصرف این دوره','۱۷٬۶۴۰','پیامک'],['میانگین روزانه','۱٬۲۶۰','پیامک'],['شارژ آخر','۲۵٬۰۰۰','پیامک']],table:'گردش نمونه',cols:['شرح','ورودی','مصرف','تاریخ'],rows:[['شارژ دوره‌ای','۲۵٬۰۰۰','—','۱ مهر'],['ارسال کمپین‌ها','—','۶٬۴۸۰','امروز'],['ارسال اطلاع‌رسانی','—','۱۱٬۱۶۰','این ماه']]},
    followup: {title:'پیگیری',desc:'وضعیت پیام‌ها و درخواست‌های نیازمند پیگیری',table:'موارد پیگیری',cols:['شناسه نمونه','موضوع','آخرین وضعیت','آخرین تغییر'],rows:[['MSG-1405-021','یادآوری موعد','در حال بررسی','امروز · ۱۰:۲۰'],['MSG-1405-018','گزارش تحویل','نیازمند بررسی','دیروز · ۱۵:۱۰'],['MSG-1405-014','اصلاح گروه مخاطب','تکمیل شد','۲ روز پیش']]},
    logs: {title:'رویدادها',desc:'ردیابی تغییرات انجام‌شده در محیط نمونه',table:'رویدادهای سامانه',cols:['رویداد','نقش نمایشی','زمان','نتیجه'],rows:[['ثبت کمپین یادآوری','مدیر نمونه','۱۰:۲۰','موفق'],['بارگذاری فهرست نمونه','اپراتور نمونه','۰۹:۱۵','موفق'],['دریافت گزارش تحویل','کارشناس گزارش','دیروز','موفق']]},
    admin: {title:'مدیریت',desc:'نقش‌ها و تنظیم‌های پنل نمونه',table:'نقش‌های دسترسی',cols:['نقش','دسترسی','کاربران نمایشی','وضعیت'],rows:[['مدیر سامانه','کامل','۲','فعال'],['گزارش‌گیر','گزارش و پیگیری','۴','فعال'],['اپراتور ورود اطلاعات','ورود فایل','۳','فعال']]}
  },
  budget: {
    dashboard:{title:'داشبورد',desc:'وضعیت دوره، تخصیص‌ها و عملکرد واحدها',stats:[['بودجه‌ی مصوب','۸٫۴','میلیارد'],['مصرف‌شده','۵٫۷','میلیارد'],['گزارش‌های منتظر تأیید','۷','مورد'],['واحدهای فعال','۱۲','واحد']],table:'نمای کلی واحدها',cols:['واحد نمونه','تخصیص','مصرف','پیشرفت'],rows:[['عملیات','۱٫۸ میلیارد','۱٫۲ میلیارد','۶۷٪'],['فناوری','۱٫۴ میلیارد','۹۸۰ میلیون','۷۰٪'],['پشتیبانی','۹۲۰ میلیون','۶۴۴ میلیون','۷۰٪']],actions:['ثبت عملکرد روزانه','بررسی تأییدها']},
    approvals:{title:'تأیید گزارش‌ها',desc:'بازبینی و تأیید گزارش عملکرد واحدها',table:'در انتظار بررسی',cols:['واحد','دوره','گزارش‌های ثبت‌شده','وضعیت'],rows:[['عملیات نمونه','شهریور ۱۴۰۵','۱۲','در انتظار'],['فناوری نمونه','شهریور ۱۴۰۵','۸','در انتظار'],['پشتیبانی نمونه','شهریور ۱۴۰۵','۶','نیازمند اصلاح']],actions:['تأیید انتخاب‌شده']},
    notifications:{title:'پیام‌ها',desc:'اعلان‌های مرتبط با وظایف و دوره‌ی بودجه',table:'اعلان‌های اخیر',cols:['موضوع','فرستنده','زمان','وضعیت'],rows:[['گزارش ماهانه برای بررسی آماده است','سامانه','امروز','جدید'],['دوره‌ی جدید آغاز شد','مدیر بودجه','دیروز','خوانده‌شده']]},
    profile:{title:'پروفایل',desc:'اطلاعات حساب نمایشی شما',table:'اطلاعات کاربری',cols:['عنوان','مقدار نمایشی'],rows:[['نام','کاربر نمونه'],['نقش','مدیر واحد'],['واحد','عملیات نمونه'],['وضعیت حساب','فعال']]},
    cycles:{title:'دوره‌های بودجه',desc:'مدیریت دوره‌های بودجه و وضعیت هر چرخه',table:'دوره‌های ثبت‌شده',cols:['عنوان دوره','سال مالی','تاریخ شروع','وضعیت'],rows:[['برنامه عملیاتی سالانه','۱۴۰۵','فروردین ۱۴۰۵','فعال'],['دوره بازنگری میان‌سال','۱۴۰۵','تیر ۱۴۰۵','در حال تنظیم'],['برنامه سال آینده','۱۴۰۶','—','پیش‌نویس']]},
    strategy:{title:'ساختار عملیاتی',desc:'نمای درختی راهبرد، هدف، برنامه و فعالیت‌ها',tree:true},
    assignments:{title:'تخصیص زیرفعالیت',desc:'واگذاری فعالیت‌ها به واحدها و مسئولان نمایشی',table:'تخصیص‌های اخیر',cols:['زیرفعالیت','واحد مسئول','مسئول نمونه','پیشرفت'],rows:[['بهبود فرایند ثبت','عملیات','کاربر نمونه','۶۰٪'],['بازنگری خدمات داخلی','فناوری','کاربر نمونه','۳۵٪']]},
    reports:{title:'گزارش‌ها',desc:'گزارش عملکرد بر اساس دوره و واحد سازمانی',stats:[['گزارش‌های این دوره','۸۶','گزارش'],['به‌موقع','۷۴','گزارش'],['با تأخیر','۱۲','گزارش'],['واحدهای تکمیل‌شده','۹','از ۱۲']],table:'آخرین گزارش‌ها',cols:['واحد','ماه','ثبت‌کننده','وضعیت'],rows:[['عملیات','شهریور','کاربر نمونه','تکمیل‌شده'],['فناوری','شهریور','کاربر نمونه','در انتظار تأیید'],['پشتیبانی','شهریور','کاربر نمونه','نیازمند اصلاح']]},
    statistics:{title:'آمار و نمودارها',desc:'تحلیل خلاصه‌ی بودجه و عملکرد دوره',stats:[['درصد تحقق','۷۲٪','از برنامه'],['عملکرد متوسط','۸۶٪','واحدها'],['مانده‌ی بودجه','۲٫۷','میلیارد'],['روند دوره','↑ ۶٫۲٪','نسبت به قبل']],chart:true},
    salaries:{title:'حقوق ماهانه',desc:'خلاصه‌ی هزینه‌ی حقوق در دوره‌ی انتخابی',stats:[['هزینه‌ی ماه','۱٫۲','میلیارد'],['واحدهای ثبت‌شده','۱۲','واحد'],['موارد باز','۳','مورد'],['آخرین بروزرسانی','۲۵','شهریور']],table:'خلاصه‌ی واحدها',cols:['واحد','تعداد افراد','مبلغ نمونه','وضعیت'],rows:[['عملیات','۲۴','۳۴۰ میلیون','ثبت‌شده'],['فناوری','۱۶','۲۸۰ میلیون','ثبت‌شده']]},
    units:{title:'واحدهای سازمانی',desc:'ساختار و مراکز فعالیت سازمان نمونه',table:'واحدها',cols:['نام واحد','کد','مدیر نمونه','وضعیت'],rows:[['عملیات','U-01','مدیر نمونه','فعال'],['فناوری','U-02','مدیر نمونه','فعال'],['پشتیبانی','U-03','مدیر نمونه','فعال']]},
    employees:{title:'کارکنان',desc:'فهرست کاربران و کارکنان نمایشی',table:'کارکنان',cols:['نام نمایشی','واحد','نقش','وضعیت'],rows:[['کاربر نمونه ۱','عملیات','کارشناس','فعال'],['کاربر نمونه ۲','فناوری','مدیر واحد','فعال'],['کاربر نمونه ۳','پشتیبانی','کارشناس','فعال']]},
    transfers:{title:'انتقال کارمند',desc:'ثبت و پیگیری جابه‌جایی میان واحدها',table:'درخواست‌های انتقال',cols:['شناسه','از واحد','به واحد','وضعیت'],rows:[['TR-1405-03','عملیات','پشتیبانی','در انتظار'],['TR-1405-02','فناوری','عملیات','تأییدشده']]},
    'structure-import':{title:'ورود ساختار',desc:'ورود آزمایشی ساختار و اطلاعات از فایل اکسل',table:'سوابق ورود',cols:['نام فایل نمونه','نوع داده','زمان','نتیجه'],rows:[['ساختار سازمان.xlsx','واحدها و فعالیت‌ها','امروز','آماده‌ی بررسی']]},
    users:{title:'حساب‌های ورود',desc:'مدیریت نقش‌های ورود در محیط نمایشی',table:'حساب‌های نمونه',cols:['شناسه‌ی نمایشی','نقش','واحد','وضعیت'],rows:[['user-01','مدیر بودجه','ستاد نمونه','فعال'],['user-02','مدیر واحد','عملیات','فعال'],['user-03','کارمند','فناوری','فعال']]},
    settings:{title:'تنظیمات سامانه',desc:'تنظیم‌های دوره، اعلان و دسترسی‌ها',table:'تنظیم‌ها',cols:['تنظیم','مقدار نمایشی','وضعیت'],rows:[['دوره‌ی فعال','برنامه عملیاتی ۱۴۰۵','فعال'],['اعلان ایمیلی','روشن','فعال'],['قفل ثبت دوره','خاموش','فعال']]},
    audit:{title:'رویدادنگاری',desc:'ثبت تغییرات کلیدی در دوره‌ی بودجه',table:'ردپای تغییرات',cols:['رویداد','کاربر نمونه','زمان','نتیجه'],rows:[['ثبت عملکرد ماهانه','کاربر نمونه ۱','امروز · ۱۱:۳۰','موفق'],['تغییر وضعیت گزارش','مدیر نمونه','دیروز · ۱۵:۱۰','موفق']]}
  },
  food: {
    dashboard:{title:'داشبورد مدیریتی',desc:'نمای کلی انبار، دریافت‌ها، مصرف و برنامه‌ی غذا',stats:[['اقلام فعال','۱۲۸','قلم'],['دریافت این ماه','۳۴','رسید'],['درخواست‌های تخصیص','۸','در انتظار'],['رزرو غذا امروز','۱۸۴','نفر']],table:'آخرین گردش‌ها',cols:['شرح','دسته','مقدار','زمان'],rows:[['ورود مواد خشک','دریافت انبار','۴۸ قلم','امروز'],['مصرف آشپزخانه','مصرف روزانه','۲۶ قلم','امروز'],['ثبت شمارش','انبارگردانی','۱۲ قلم','دیروز']],actions:['ثبت رسید انبار','مشاهده موجودی']},
    inventory:{title:'موجودی‌ها',desc:'اقلام، دسته‌بندی و مانده‌ی انبار',stats:[['کل اقلام','۱۲۸','قلم'],['کم‌موجودی','۶','قلم'],['ارزش موجودی','۹۸۰','میلیون'],['آخرین شمارش','امروز','۱۱:۲۰']],table:'اقلام انبار',cols:['نام قلم','دسته','موجودی','واحد','وضعیت'],rows:[['برنج دانه‌بلند','مواد خشک','۱۸۰','کیلوگرم','موجود'],['روغن مایع','مواد مصرفی','۲۴','لیتر','کم‌موجودی'],['مرغ تازه','مواد پروتئینی','۶۸','کیلوگرم','موجود'],['عدس','مواد خشک','۵۲','کیلوگرم','موجود']]},
    receipts:{title:'دریافت و ورود',desc:'ثبت رسید خرید و ورود اقلام به انبار',table:'رسیدهای اخیر',cols:['شماره رسید','تأمین‌کننده نمونه','اقلام','تاریخ','وضعیت'],rows:[['RC-1405-028','تأمین‌کننده نمونه ۱','۸ قلم','امروز','ثبت‌شده'],['RC-1405-027','تأمین‌کننده نمونه ۲','۱۲ قلم','دیروز','در انتظار تأیید']]},
    consumptions:{title:'مصرف و خروج',desc:'ثبت خروج مواد و مصرف روزانه‌ی آشپزخانه',table:'خروجی‌های ثبت‌شده',cols:['شماره خروج','مقصد','اقلام','زمان','وضعیت'],rows:[['CO-1405-041','آشپزخانه مرکزی','۶ قلم','امروز','ثبت‌شده'],['CO-1405-040','واحد خدمات','۳ قلم','دیروز','ثبت‌شده']]},
    allocations:{title:'درخواست تخصیص',desc:'درخواست مواد و بررسی سهمیه‌ی واحدها',table:'درخواست‌های تخصیص',cols:['واحد نمونه','اقلام درخواستی','زمان','وضعیت'],rows:[['آشپزخانه','۹ قلم','امروز','در انتظار'],['خدمات','۴ قلم','دیروز','تأییدشده']]},
    'purchase-orders':{title:'سفارشات خرید',desc:'برنامه‌ریزی خرید بر اساس موجودی و نیاز',table:'سفارش‌های خرید',cols:['شماره سفارش','تأمین‌کننده نمونه','مبلغ نمونه','زمان','وضعیت'],rows:[['PO-1405-016','تأمین‌کننده نمونه ۱','۸۶ میلیون','امروز','پیش‌نویس'],['PO-1405-015','تأمین‌کننده نمونه ۲','۴۲ میلیون','دیروز','ثبت‌شده']]},
    reservations:{title:'رزرو غذا',desc:'فهرست رزرو روزانه و ظرفیت وعده‌ها',stats:[['رزرو امروز','۱۸۴','نفر'],['ظرفیت باقی‌مانده','۴۶','نفر'],['وعده‌های فعال','۲','وعده'],['لغوشده امروز','۷','رزرو']],table:'برنامه‌ی رزرو',cols:['وعده','منو','ظرفیت','رزرو','وضعیت'],rows:[['ناهار','خوراک روز و برنج','۲۳۰','۱۸۴','فعال'],['میان‌وعده','بسته‌ی نمونه','۱۲۰','۸۶','فعال']]},
    recipes:{title:'منو و دستورپخت',desc:'تعریف منو، دستورپخت و برآورد مواد مصرفی',table:'منوهای برنامه‌ریزی‌شده',cols:['نام منو','وعده','نیاز مواد','تاریخ','وضعیت'],rows:[['خوراک سبزیجات','ناهار','۱۲ قلم','امروز','منتشرشده'],['مرغ زعفرانی','ناهار','۹ قلم','فردا','پیش‌نویس'],['سوپ روز','پیش‌غذا','۶ قلم','امروز','منتشرشده']]},
    stocktakes:{title:'انبارگردانی',desc:'ثبت شمارش دوره‌ای و مغایرت اقلام',table:'دوره‌های شمارش',cols:['شناسه','محدوده','اقلام شمارش‌شده','تاریخ','وضعیت'],rows:[['ST-1405-009','انبار اصلی','۸۶ از ۱۲۰','امروز','در حال انجام'],['ST-1405-008','سردخانه','تکمیل','هفته‌ی قبل','بسته‌شده']]},
    reports:{title:'گزارش‌ها',desc:'گزارش موجودی، مصرف، خرید و رزرو',stats:[['مصرف این ماه','۱٫۲','تن'],['رسیدهای بسته‌شده','۳۴','رسید'],['صرفه‌جویی ثبت‌شده','۸٫۴٪','نسبت به قبل'],['پیش‌بینی کفایت','۱۱','روز']],chart:true},
    'audit-logs':{title:'ردپای عملیات',desc:'پیگیری رویدادهای ثبت و تغییر در انبار',table:'رویدادهای عملیات',cols:['رویداد','نقش نمونه','زمان','نتیجه'],rows:[['ثبت رسید RC-1405-028','انباردار نمونه','امروز','موفق'],['ثبت رزرو غذا','کاربر نمونه','امروز','موفق'],['اصلاح شمارش انبار','مدیر نمونه','دیروز','موفق']]},
    settings:{title:'تنظیمات',desc:'تنظیم واحدها، دسته‌ها و هشدار موجودی',table:'تنظیم‌های نمونه',cols:['عنوان','مقدار نمایشی','وضعیت'],rows:[['هشدار کف موجودی','کمتر از ۲۰ واحد','فعال'],['انبار پیش‌فرض','انبار اصلی نمونه','فعال'],['واحد اندازه‌گیری','متریک','فعال']]},
    users:{title:'مدیریت کاربران',desc:'نقش‌ها و دسترسی کاربران سامانه',table:'کاربران نمایشی',cols:['کاربر','نقش','محدوده','وضعیت'],rows:[['کاربر نمونه ۱','مدیر انبار','همه‌ی انبارها','فعال'],['کاربر نمونه ۲','انباردار','انبار اصلی','فعال'],['کاربر نمونه ۳','مسئول غذا','رزرو و منو','فعال']]}
  }
};

const publicRoutes = {
  arbitration: [
    ['about','درباره‌ی مرکز','مسیر، مأموریت و ساختار ارائه‌ی خدمات'], ['services','خدمات','داوری، میانجی‌گری و مشاوره‌ی فرایند'],
    ['news','اخبار','رویدادها و اطلاعیه‌های نمونه'], ['fees','محاسبه‌گر هزینه','برآورد نمایشی بر اساس اطلاعات واردشده'],
    ['process','فرآیند','مراحل ارجاع، بررسی و صدور رأی'], ['clauses','شرط داوری','نمونه‌ی بندهای قراردادی'],
    ['arbitrators','داوران','معرفی تخصص‌ها و حوزه‌های رسیدگی'], ['rules','قوانین','آیین‌نامه‌ها و راهنمای حقوقی'], ['contact','تماس','راه‌های ارتباطی نمونه']
  ],
  portal: [
    ['services','خدمات اعضا','کارت، گواهی و مشاوره'], ['systems','سامانه‌های یکپارچه','دسترسی به خدمات الکترونیک'], ['members','بانک اعضا','جست‌وجوی اعضای نمونه'],
    ['appointments','نوبت‌دهی مشاوره','درخواست وقت ملاقات'], ['directory','دایرکتوری بنگاه‌ها','فهرست شرکت‌های نمونه'], ['economy','دیده‌بان اقتصاد','شاخص‌های اقتصادی'],
    ['trade','تجارت بین‌الملل','صادرات و هیئت‌های تجاری'], ['commissions','کمیسیون‌های تخصصی','گروه‌ها و کارگروه‌ها'], ['research','پژوهش و گزارش‌ها','دانش و تحلیل بازار'],
    ['surveys','پایش کسب‌وکار','نظرسنجی‌های دوره‌ای'], ['news','اخبار و رویدادها','تازه‌های مجموعه'], ['saffron','پورتال زعفران','زنجیره‌ی ارزش و صادرات'],
    ['announcements','بخشنامه‌ها','ابلاغیه‌ها و فراخوان‌ها'], ['meetings','جلسات و مصوبات','تقویم نشست‌ها'], ['forum','گفتمان اقتصادی','گفت‌وگوی اعضا'],
    ['education','مرکز آموزش','دوره‌ها و کارگاه‌ها'], ['about','درباره‌ی سازمان','معرفی و مأموریت'], ['organizations','تشکل‌های اقتصادی','انجمن‌ها و اتحادیه‌ها'],
    ['assets','اموال و امکانات','فضاها و خدمات رفاهی'], ['contact','ارتباط با ما','فرم و نشانی نمونه'], ['notifications','اعلان‌ها','پیام‌ها و پیگیری درخواست'],
    ['audit','گزارش حسابرسی','رویدادهای مدیریتی'], ['dashboard','داشبورد مدیریتی','نمای کلی شاخص‌ها'], ['guide','راهنمای استفاده','راهنمای مسیر خدمات'], ['admin','پنل مدیریت محتوا','پیش‌نمایش پنل مدیر']
  ]
};

const session = { active:'sms', authenticated:{}, screen:{sms:'login',budget:'login',food:'login',arbitration:'home',portal:'home'}, toastTimer:null };
const navRoot=document.querySelector('#project-nav');
const showcase=document.querySelector('#showcase');

function isValidScreen(appId,screen){
  if(screen==='login')return true;
  if(pages[appId]?.[screen]||appTypes[appId].nav?.some(([,id])=>id===screen))return true;
  if((publicRoutes[appId]||[]).some(([id])=>id===screen))return true;
  return appId==='arbitration'&&['home','register','dashboard','new-case'].includes(screen)
    ||appId==='portal'&&['home','dashboard','admin','search'].includes(screen);
}
const initialParams=new URLSearchParams(location.search);
if(appTypes[initialParams.get('project')])session.active=initialParams.get('project');
if(isValidScreen(session.active,initialParams.get('screen'))){
  session.screen[session.active]=initialParams.get('screen');
  if(!['login','home','register'].includes(session.screen[session.active]))session.authenticated[session.active]=true;
}
function syncUrl(){const url=new URL(location.href);url.searchParams.set('project',session.active);url.searchParams.set('screen',session.screen[session.active]);history.replaceState(null,'',url.pathname+url.search+url.hash)}

function renderProjectPicker(){
  navRoot.innerHTML=Object.values(appTypes).map(app=>`<button class="project-link ${session.active===app.id?'active':''}" data-project="${app.id}" aria-pressed="${session.active===app.id}"><span class="project-icon">${app.icon}</span><span><strong>${app.title}</strong><small>${app.family}</small></span></button>`).join('');
  const i=Object.keys(appTypes).indexOf(session.active)+1;
  document.querySelector('#current-index').textContent=`${String(i).padStart(2,'0')} / 05`;
}

function brand(app){return `<span class="product-mark">${app.icon}</span><span class="product-brand-copy"><b>${app.title}</b><small>${app.family}</small></span>`}
function badge(label,kind=''){return `<span class="app-badge ${kind}">${label}</span>`}
function field(label,placeholder,type='text'){return `<label class="field"><span>${label}</span><input type="${type}" placeholder="${placeholder}" autocomplete="off" aria-label="${label}"></label>`}

function loginPage(app){
  const sms=app.id==='sms',budget=app.id==='budget',food=app.id==='food';
  const welcome=sms?'مدیریت ارتباطات، یک‌جا و شفاف.':budget?'بودجه و عملکرد، با مسیر روشن.':food?'جریان موجودی تا مصرف غذا، قابل پیگیری.':'به فضای کاری نمونه خوش آمدید.';
  const logoCopy=sms?'پنل ارتباطات سازمانی':budget?'برنامه و بودجه‌ی عملیاتی':food?'مدیریت انبار و مواد غذایی':app.title;
  const accountLabel=app.id==='portal'?'ایمیل یا نام کاربری':'نام کاربری';
  const highlights=sms?['مدیریت کمپین و پیام','گزارش تحویل و پیگیری','گزارش مالی و رویدادها']:budget?['ثبت عملکرد و گزارش','تخصیص و تأیید بودجه','مدیریت واحد و دوره']:food?['ردیابی گردش موجودی','رزرو غذا و برنامه‌ی منو','گزارش مصرف و انبارگردانی']:['ورود به خدمات حساب','پیگیری پرونده و درخواست','مدیریت اطلاعات نمایشی'];
  return `<section class="login-screen ${app.id}-login"><div class="login-showcase"><div class="login-identity">${brand(app)}</div><span class="login-eyebrow">محیط نمایشی محصول</span><h2>${welcome}</h2><p>صفحه‌ی ورود و اجزای اصلی بر اساس ساختار پروژه بازسازی شده‌اند. ورود در این نسخه فقط یک پیش‌نمایش محلی است.</p><ul>${highlights.map(x=>`<li><i>✓</i>${x}</li>`).join('')}</ul><span class="login-watermark">${app.stack}</span></div><div class="login-form-side"><form class="login-card" data-action="demo-login"><div class="login-mobile-brand">${brand(app)}</div><div class="login-card-icon">${app.icon}</div><span class="form-kicker">ورود امن · نمایش نمونه</span><h2>${app.id==='food'?'ورود به حساب کاربری':'ورود به سامانه'}</h2><p class="form-subtitle">برای دیدن صفحه‌های واقعی‌تر محصول، وارد محیط نمونه شوید.</p>${field(accountLabel,app.id==='portal'?'sample@example.test':'کاربر نمونه')}${field('رمز عبور','در این دمو نیاز نیست','password')}${budget?'<label class="remember-line"><input type="checkbox" checked> مرا به خاطر بسپار <a href="#" data-action="forgot">فراموشی رمز؟</a></label>':''}<button class="app-primary" type="submit">ورود نمایشی <span>←</span></button><div class="login-safe"><span>◉</span> اطلاعات ورود ذخیره یا ارسال نمی‌شود.</div>${app.id==='arbitration'?'<button type="button" class="text-button" data-action="register">حساب ندارید؟ ثبت‌نام نمایشی</button>':''}</form></div></section>`;
}

function appTopbar(app){const publicGuest=['arbitration','portal'].includes(app.id)&&!session.authenticated[app.id];return `<header class="product-header">${brand(app)}<span class="product-header-context">${badge('پیش‌نمایش مستقل','demo')}<span class="top-context-text">داده‌های آزمایشی · بدون اتصال</span></span>${publicGuest?`<button class="signout-button guest-login" data-screen="login">ورود / عضویت</button>`:`<div class="product-user"><span class="avatar">ن</span><span><b>کاربر نمونه</b><small>${app.id==='budget'?'مدیر واحد':app.id==='food'?'مدیر انبار':app.id==='sms'?'مدیر سامانه':'عضو نمونه'}</small></span><button data-action="signout" class="signout-button">خروج از دمو</button></div>`}</header>`}

function navButtons(items){return items.map(([label,id])=>`<button class="inner-nav-button ${session.screen[session.active]===id?'selected':''}" data-screen="${id}"><span class="nav-symbol">${iconFor(id)}</span>${label}</button>`).join('')}
function iconFor(id){return ({dashboard:'▦',home:'⌂',login:'↪',data:'⇧',reports:'▤',finance:'◉',followup:'↗',logs:'≋',admin:'⚙',approvals:'✓',notifications:'◇',profile:'○',cycles:'◷',strategy:'⌘',assignments:'↳',statistics:'▥',salaries:'◈',units:'⌂',employees:'♧',transfers:'⇄','structure-import':'⇧',users:'♙',settings:'⚙',audit:'≋',inventory:'▦',receipts:'↓',consumptions:'↑',allocations:'☷','purchase-orders':'▣',reservations:'♨',recipes:'▤',stocktakes:'✓','audit-logs':'≋',services:'◇',systems:'⌘',members:'♙',appointments:'◷',directory:'▤',economy:'↗',trade:'⇄',commissions:'◈',research:'▤',surveys:'◷',news:'▣',saffron:'✳',announcements:'◇',meetings:'◷',forum:'✉',education:'▱',about:'i',organizations:'♧',assets:'⌂',contact:'↗',guide:'?',register:'＋','new-case':'＋','case-detail':'▤',rules:'§',clauses:'¶',arbitrators:'♙',process:'⇢',fees:'◈'})[id]||'•'}

function innerNavigation(app){
  if(app.id==='sms')return `<nav class="sms-nav">${navButtons(app.nav)}</nav>`;
  if(app.id==='budget'||app.id==='portal')return `<aside class="product-sidebar">${app.groups.map(([group,items])=>`<section class="nav-group"><h3>${group}</h3>${navButtons(items)}</section>`).join('')}<div class="sidebar-demo-note">${badge('دموی نمایشی','demo')}<p>تغییرات فقط در همین صفحه موقت هستند.</p></div></aside>`;
  if(app.id==='food')return `<aside class="product-sidebar food-sidebar"><div class="side-caption">منوی سامانه</div>${navButtons(app.nav)}<div class="sidebar-demo-note">${badge('محیط نمونه','demo')}<p>موجودی‌ها و گردش‌ها ساختگی هستند.</p></div></aside>`;
  return '';
}

function publicNavigation(app){
  const top=(app.nav||[]).map(([label,id])=>`<button class="public-nav-link ${session.screen[app.id]===id?'active':''}" data-screen="${id}">${label}</button>`).join('');
  if(app.id==='arbitration')return `<nav class="public-nav arbitration-nav">${top}<button class="public-nav-login" data-screen="${session.authenticated[app.id]?'dashboard':'login'}">${session.authenticated[app.id]?'داشبورد پرونده‌ها':'ورود متقاضی'}</button><button class="public-nav-cta" data-screen="${session.authenticated[app.id]?'new-case':'register'}">${session.authenticated[app.id]?'ثبت پرونده':'ثبت درخواست'}</button></nav>`;
  return `<nav class="portal-nav">${app.groups.map(([group,items])=>`<details class="mega-group"><summary>${group}<span>⌄</span></summary><div class="mega-menu"><b>${group}</b>${items.map(([label,id])=>`<button data-screen="${id}">${label}<span>←</span></button>`).join('')}</div></details>`).join('')}<button class="public-nav-link" data-screen="search">جست‌وجو</button><button class="portal-login" data-screen="${session.authenticated[app.id]?'dashboard':'login'}">${session.authenticated[app.id]?'میزکار عضو':'ورود / عضویت'}</button></nav>`;
}

function statCards(items){return `<div class="app-stat-grid">${items.map((s,i)=>`<article class="app-stat"><span>${s[0]}</span><b>${s[1]}</b><small>${s[2]}</small><i class="stat-spark spark-${i}"></i></article>`).join('')}</div>`}
function tablePanel(title,cols,rows,tools=''){return `<section class="app-panel"><header class="app-panel-head"><h3>${title}</h3><button class="panel-more" data-action="show-all">مشاهده همه <span>←</span></button></header><div class="responsive-table"><table><thead><tr>${cols.map(c=>`<th>${c}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map((cell,i)=>`<td>${i===0?`<strong>${cell}</strong>`:i===row.length-1?badge(cell,['در انتظار','نیازمند اصلاح','در حال بررسی','پیش‌نویس'].includes(cell)?'waiting':''):cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>${tools?`<div class="table-tools">${tools}</div>`:''}</section>`}
function actionButton(label,action='primary'){return `<button class="app-action" data-action="${action}">${label}<span>＋</span></button>`}
function chartPanel(title='روند هفتگی'){return `<section class="app-panel chart-panel"><header class="app-panel-head"><h3>${title}</h3>${badge('۷ روز اخیر')}</header><div class="chart-summary"><b>۸۶٫۴٪</b><span>↑ ۶٫۲٪ نسبت به دوره‌ی قبل</span></div><div class="chart-bars">${[39,58,48,75,60,82,70,96,54,74,88,67].map((h,i)=>`<i style="height:${h}%" class="bar-${i%4}"></i>`).join('')}</div><div class="chart-days"><span>ش</span><span>ی</span><span>د</span><span>س</span><span>چ</span><span>پ</span><span>ج</span></div></section>`}
function treePanel(){return `<section class="app-panel hierarchy"><header class="app-panel-head"><h3>درخت راهبرد تا اجرا</h3>${badge('۵ سطح')}</header><div class="tree-row level-1"><span>۱</span><b>راهبرد نمونه: ارتقای بهره‌وری</b><em>راهبرد</em></div><div class="tree-row level-2"><span>۲</span><b>هدف: بهبود خدمات سازمانی</b><em>هدف</em></div><div class="tree-row level-3"><span>۳</span><b>برنامه: تحول فرایندهای داخلی</b><em>برنامه</em></div><div class="tree-row level-4"><span>۴</span><b>فعالیت: ساماندهی منابع</b><em>فعالیت</em></div><div class="tree-row level-5"><span>۵</span><b>زیرفعالیت: گزارش ماهانه</b><em>زیرفعالیت</em></div></section>`}

function contentFor(app,screen){
  const page=(pages[app.id]||{})[screen];
  if(page){
    const head=`<div class="app-page-title"><div><span class="page-kicker">${app.family}</span><h1>${page.title}</h1><p>${page.desc}</p></div><div class="page-actions">${badge('دوره جاری')} ${page.actions?.map(a=>actionButton(a)).join('')||''}</div></div>`;
    const stats=page.stats?statCards(page.stats):'';
    let body='';
    if(page.tree)body=treePanel();
    else if(page.chart)body=`<div class="app-content-grid wide-left">${chartPanel('عملکرد بودجه در دوره')}<section class="app-panel"><header class="app-panel-head"><h3>شاخص‌های کلیدی</h3></header><div class="quick-kpi"><b>مصرف بودجه <strong>۶۸٪</strong></b><div class="meter"><i style="width:68%"></i></div><b>پیشرفت فعالیت <strong>۷۲٪</strong></b><div class="meter gold-meter"><i style="width:72%"></i></div></div></section></div>`;
    else if(page.table)body=tablePanel(page.table,page.cols,page.rows);
    if(app.id==='sms'&&screen==='dashboard')body=`<div class="app-content-grid wide-left">${tablePanel(page.table,page.cols,page.rows)}${chartPanel('تحویل پیامک')}</div>`;
    if(app.id==='budget'&&screen==='dashboard')body=`<div class="app-content-grid">${tablePanel(page.table,page.cols,page.rows,actionButton('ثبت عملکرد روزانه','open-reports'))}<div class="app-column">${tablePanel('اقدام‌های سریع',['بخش','شرح'],[['تأیید گزارش‌ها','۷ مورد باز'],['ساختار عملیاتی','به‌روزرسانی دوره'],['گزارش عملکرد','شهریور ۱۴۰۵']])}${chartPanel('مصرف بودجه')}</div></div>`;
    if(app.id==='food'&&screen==='dashboard')body=`<div class="app-content-grid">${tablePanel(page.table,page.cols,page.rows)}<div class="app-column">${tablePanel('دسترسی سریع',['عملیات','شرح'],[['ثبت رسید','ورود اقلام'],['رزرو غذا','۱۸۴ رزرو امروز'],['گزارش موجودی','۶ قلم کم‌موجودی']])}${chartPanel('گردش موجودی')}</div></div>`;
    return `${head}${stats}${body}`;
  }
  if(app.id==='sms')return genericModule(app,screen,{
    title:'ارسال پیام آزمایشی',desc:'تنظیم گیرندگان و متن پیام در محیطی بدون ارسال واقعی',fields:[['گروه مخاطب','انتخاب گروه نمونه'],['متن پیام','متن نمایشی پیامک']],action:'پیش‌نمایش پیام',table:'گروه‌های مخاطب',cols:['گروه','اعضای نمونه','آخرین به‌روزرسانی'],rows:[['اعضای فعال','۱٬۲۴۰','امروز'],['ثبت‌نام جدید','۴۲۰','دیروز']]});
  if(app.id==='budget')return genericModule(app,screen,{
    title:'ثبت عملکرد روزانه',desc:'فرم نمونه‌ی گزارش عملکرد برای واحد انتخاب‌شده',fields:[['دوره','شهریور ۱۴۰۵'],['واحد','عملیات نمونه'],['شرح فعالیت','شرح کوتاه عملکرد'],['درصد پیشرفت','۶۰٪']],action:'ذخیره‌ی پیش‌نویس'});
  if(app.id==='food')return genericModule(app,screen,{
    title:'ثبت عملیات نمونه',desc:'فرم تعاملی برای گردش انبار و خدمات روزانه',fields:[['عنوان','ثبت نمونه'],['واحد','انبار اصلی'],['توضیحات','شرح کوتاه']],action:'ثبت نمایشی'});
  return `${publicContent(app,screen)}`;
}

function genericModule(app,screen,config){
  const title=config.title,head=`<div class="app-page-title"><div><span class="page-kicker">${app.family}</span><h1>${title}</h1><p>${config.desc}</p></div><div class="page-actions">${badge('فقط پیش‌نمایش')}</div></div>`;
  const form=config.fields?`<form class="app-panel demo-form" data-action="local-form"><header class="app-panel-head"><h3>اطلاعات نمونه</h3>${badge('ذخیره نمی‌شود')}</header><div class="form-grid">${config.fields.map(([label,placeholder])=>field(label,placeholder,label.includes('متن')||label.includes('شرح')?'text':'text')).join('')}</div><button class="app-action" type="submit">${config.action}<span>＋</span></button></form>`:'';
  const table=config.table?tablePanel(config.table,config.cols,config.rows):'';
  return `${head}<div class="app-content-grid">${form}${table||chartPanel('تغییرات نمایشی')}</div>`;
}

function publicContent(app,screen){
  if(screen==='home')return app.id==='arbitration'?arbitrationHome():portalHome();
  if(screen==='login')return loginPage(app);
  if(screen==='register')return `<section class="public-module"><span class="page-kicker">حساب نمایشی</span><h1>ثبت‌نام متقاضی</h1><p>فرم ثبت‌نام نمونه؛ اطلاعات در جایی ارسال نمی‌شود.</p><form class="app-panel public-form" data-action="local-form">${field('نام و نام خانوادگی','کاربر نمونه')}${field('شماره تماس','شماره‌ی ساختگی','tel')}${field('نام کاربری','نام کاربری نمایشی')}<button class="app-action">ثبت‌نام نمایشی</button></form></section>`;
  if(screen==='new-case')return genericPublicForm('ثبت درخواست جدید','فرم نمایشی ثبت پرونده؛ داده‌ی واردشده ذخیره یا ارسال نمی‌شود.',['موضوع درخواست','شرح کوتاه','روش تماس نمونه']);
  if(screen==='fees')return `<section class="public-module"><span class="page-kicker">ابزار نمونه</span><h1>محاسبه‌گر هزینه</h1><p>بخش محاسبه صرفاً برای نمایش رابط است و مبنای قانونی یا مالی ندارد.</p><div class="fee-layout"><div class="app-panel demo-form">${field('مبلغ مورد اختلاف (نمایشی)','۳۰۰ میلیون تومان','number')}<label class="field"><span>نوع خدمت</span><select><option>داوری نمونه</option><option>میانجی‌گری نمونه</option></select></label><button class="app-action" data-action="fee-estimate">نمایش برآورد نمونه <span>←</span></button></div><div class="app-panel fee-result"><span>برآورد نمایشی</span><strong id="fee-value">—</strong><small>تعرفه یا مبلغ واقعی در این نسخه محاسبه نمی‌شود.</small></div></div></section>`;
  const item=(publicRoutes[app.id]||[]).find(x=>x[0]===screen);
  if(screen==='dashboard'&&session.authenticated[app.id])return app.id==='arbitration'?arbitrationDashboard():portalDashboard();
  if(screen==='search')return genericPublicForm('جست‌وجوی خدمات','نمونه‌ی جست‌وجو در خدمات و محتوا',['عبارت مورد نظر']);
  if(item)return `<section class="public-module"><span class="page-kicker">${app.family}</span><h1>${item[1]}</h1><p>${item[2]}</p><div class="public-cards">${[1,2,3].map((n)=>`<article class="public-card"><span>${n===1?'اطلاعات کلی':n===2?'مراحل و راهنما':'پیگیری آنلاین'}</span><h3>${item[1]}</h3><p>بخش نمایشی بر اساس مسیر اصلی پروژه، با اطلاعات آزمایشی.</p><button class="inline-link" data-action="module-open">مشاهده جزئیات ←</button></article>`).join('')}</div></section>`;
  return genericPublicForm('محتوای نمونه','این بخش از نسخه‌ی نمایشی قابل مشاهده است.',['عنوان','توضیحات']);
}
function genericPublicForm(title,desc,labels){return `<section class="public-module"><span class="page-kicker">${appTypes[session.active].family}</span><h1>${title}</h1><p>${desc}</p><form class="app-panel public-form" data-action="local-form">${labels.map((label)=>field(label,'اطلاعات نمونه')).join('')}<button class="app-action">ثبت نمایشی <span>＋</span></button></form></section>`}

function arbitrationHome(){return `<section class="arbitration-hero"><div class="hero-copy"><span class="hero-kicker">خدمات حل‌وفصل اختلاف</span><h1>گفت‌وگو، داوری،<br><em>راه‌حلی روشن.</em></h1><p>آشنایی با مسیر رسیدگی، خدمات قابل ارائه و شیوه‌ی پیگیری پرونده در مرکز نمونه.</p><div class="hero-actions"><button class="gold-button" data-screen="services">آشنایی با خدمات <span>←</span></button><button class="outline-button" data-screen="fees">برآورد هزینه‌ی نمایشی</button></div><div class="hero-caption">راهنمای روشن · پیگیری ساختاریافته · اطلاعات دمو</div></div><div class="hero-visual"><div class="hero-arch"><span>CASE<br>FLOW</span><i></i><b>01</b><small>گفت‌وگو تا راه‌حل</small></div><div class="hero-visual-tag">حل اختلاف<br><b>با مسیر روشن</b></div></div></section><div class="public-stat-row">${statCards([['پرونده‌های نمونه','۲۴','در حال رسیدگی'],['میانگین مراحل','۳','مرحله‌ی پیگیری'],['حوزه‌های خدمات','۶','خدمت'],['رضایت کاربران','۹۲٪','نمونه‌ی نمایشی']])}</div><section class="public-intro"><div><span class="page-kicker">فرآیند ساده و شفاف</span><h2>از ثبت درخواست<br>تا پیگیری مرحله‌ای.</h2></div><div><p>صفحه‌های خدمات، فرایند، هزینه، شرط داوری و پنل پرونده در این بازسازی در دسترس‌اند. اطلاعات هر کارت برای نمایش ساخته شده.</p><button class="inline-link" data-screen="process">دیدن مراحل رسیدگی ←</button></div></section>`}

function portalHome(){return `<section class="portal-hero"><div class="portal-hero-copy"><span class="portal-kicker">همراه کسب‌وکارها</span><h1>یک درگاه؛<br><em>خدمات، دانش و ارتباط.</em></h1><p>پیدا کردن خدمات، ارتباط با اعضا و دسترسی به اطلاعات اقتصادی در یک فضای واحد.</p><div class="hero-actions"><button class="portal-hero-button" data-screen="services">مشاهده خدمات <span>←</span></button><button class="portal-hero-secondary" data-screen="directory">جست‌وجوی بنگاه‌ها</button></div></div><div class="portal-hero-art"><div class="portal-orb orb-a"></div><div class="portal-orb orb-b"></div><div class="portal-orb orb-c"></div><div class="portal-art-label"><small>BUSINESS PORTAL</small><b>اتصال<br>به فرصت‌ها</b></div><span class="art-grid"></span></div></section><div class="portal-shortcuts">${[['خدمات اعضا','services','◇'],['نوبت مشاوره','appointments','◷'],['بانک اعضا','members','♙'],['تجارت بین‌الملل','trade','↗']].map(([label,id,ic])=>`<button class="shortcut-card" data-screen="${id}"><i>${ic}</i><span>${label}</span><b>←</b></button>`).join('')}</div><section class="portal-news"><div class="section-heading"><div><span class="page-kicker">تازه‌های پورتال</span><h2>اخبار و اطلاعیه‌ها</h2></div><button class="inline-link" data-screen="news">همه‌ی خبرها ←</button></div><div class="public-cards">${[['تقویم نشست‌های تخصصی','برنامه‌ی رویدادهای ماه جاری منتشر شد.'],['راهنمای دریافت خدمات','مسیرهای دسترسی آنلاین به خدمات پرتال.'],['گزارش بازار نمونه','مرور شاخص‌های کسب‌وکار در دوره‌ی اخیر.']].map((x,i)=>`<article class="public-card"><span>۰${i+1} · خبر و رویداد</span><h3>${x[0]}</h3><p>${x[1]}</p><button class="inline-link" data-screen="news">ادامه‌ی مطلب ←</button></article>`).join('')}</div></section>`}

function arbitrationDashboard(){return `<section class="public-module"><span class="page-kicker">پنل متقاضی · محیط نمونه</span><h1>داشبورد پرونده‌ها</h1><p>نمایش پرونده‌های ساختگی برای آشنایی با مسیر پیگیری.</p>${statCards([['پرونده‌های باز','۲','مورد'],['در انتظار اقدام','۱','مورد'],['پاسخ‌داده‌شده','۳','مورد'],['آخرین بروزرسانی','امروز','۱۰:۲۰']])}${tablePanel('پرونده‌های اخیر',['شناسه نمایشی','موضوع','مرحله','وضعیت'],[['CASE-1405-102','درخواست مشاوره','بررسی اولیه','در حال بررسی'],['CASE-1405-098','تکمیل مدارک','مدارک','نیازمند اقدام']])}<div class="page-actions">${actionButton('ثبت درخواست جدید','new-case')}</div></section>`}
function portalDashboard(){return `<section class="public-module"><span class="page-kicker">فضای عضو · محیط نمونه</span><h1>میزکار خدمات</h1><p>وضعیت درخواست‌های خدماتی و میان‌برهای پورتال در یک نگاه.</p>${statCards([['درخواست‌های من','۴','ثبت‌شده'],['در انتظار پاسخ','۲','درخواست'],['نوبت‌های آینده','۱','جلسه'],['اعلان جدید','۳','پیام']])}<div class="public-cards">${[['درخواست گواهی','در انتظار بررسی'],['نوبت مشاوره','سه‌شنبه · ۱۰:۳۰'],['دوره‌ی آموزشی','ثبت‌نام باز']].map(x=>`<article class="public-card"><span>خدمات عضو</span><h3>${x[0]}</h3><p>${x[1]}</p><button class="inline-link" data-screen="services">پیگیری ←</button></article>`).join('')}</div></section>`}

function appFrame(app){
  const screen=session.screen[app.id];
  if((app.id==='sms'||app.id==='budget'||app.id==='food')&&!session.authenticated[app.id])return `<div class="product-app ${app.id}">${loginPage(app)}</div>`;
  if(screen==='login'||screen==='register')return `<div class="product-app ${app.id}">${appTopbar(app)}${publicNavigation(app)}${screen==='login'?loginPage(app):publicContent(app,screen)}</div>`;
  const isPublic=app.id==='arbitration'||app.id==='portal';
  if(isPublic)return `<div class="product-app ${app.id}">${appTopbar(app)}${publicNavigation(app)}<main class="public-page">${publicContent(app,screen)}</main><footer class="app-footer"><span>${app.title} · نسخه‌ی نمایشی</span><span>صفحات عمومی و محیط عضو</span></footer></div>`;
  const navigation=innerNavigation(app);
  return `<div class="product-app ${app.id}">${appTopbar(app)}${app.id==='sms'?navigation:''}<div class="internal-layout ${app.id==='sms'?'sms-layout':''}">${app.id==='sms'?'':navigation}<main class="internal-main">${contentFor(app,screen)}<div class="sample-footnote">✳ این پیش‌نمایش به سامانه‌ی واقعی متصل نیست؛ اطلاعات و تغییرات ساختگی‌اند.</div></main></div><footer class="app-footer"><span>${app.title}</span><span>حالت نمایش برای نمونه‌کار</span></footer></div>`;
}

function render(){
  renderProjectPicker();
  const app=appTypes[session.active];
  showcase.className=`showcase active-${app.id}`;
  showcase.innerHTML=appFrame(app);
  syncUrl();
}

function toast(message){let el=document.querySelector('.workspace-toast');if(!el){el=document.createElement('div');el.className='workspace-toast';el.setAttribute('role','status');document.body.append(el)}el.textContent=message;el.classList.add('show');clearTimeout(session.toastTimer);session.toastTimer=setTimeout(()=>el.classList.remove('show'),2500)}

navRoot.addEventListener('click',event=>{const button=event.target.closest('[data-project]');if(!button)return;session.active=button.dataset.project;render()});
showcase.addEventListener('click',event=>{
  const target=event.target.closest('[data-screen],[data-action]');if(!target)return;
  if(target.dataset.screen){const screen=target.dataset.screen;session.screen[session.active]=screen;if(['dashboard','admin'].includes(screen)&&['arbitration','portal'].includes(session.active)&&!session.authenticated[session.active]){session.screen[session.active]='login';toast('برای مشاهده‌ی میزکار، ورود نمایشی را بزنید.')}render();return}
  const action=target.dataset.action;
  if(target.tagName==='FORM')return;
  if(action==='local-form'){event.preventDefault();toast('درخواست نمایشی ثبت شد؛ اطلاعات جایی ذخیره نشد.');return}
  if(action==='primary'||action==='open-reports'){toast('این عملیات در نسخه‌ی نمایشی فقط پیش‌نمایش دارد.');return}
  if(action==='new-case'){session.screen[session.active]='new-case';render();return}
  if(action==='signout'){session.authenticated[session.active]=false;session.screen[session.active]=appTypes[session.active].entry;render();return}
  if(action==='fee-estimate'){toast('تعرفه‌ی رسمی در این نسخه محاسبه نمی‌شود.');return}
  if(action==='forgot'){event.preventDefault();toast('بازیابی رمز در محیط نمایشی غیرفعال است.');return}
  if(action==='register'){session.screen[session.active]='register';render();return}
  if(action==='module-open'||action==='show-all'){toast('این بخش با محتوای ساختگی در دسترس است.');return}
});
showcase.addEventListener('submit',event=>{if(event.target.matches('[data-action="demo-login"]')){event.preventDefault();session.authenticated[session.active]=true;session.screen[session.active]='dashboard';render();toast('ورود نمایشی انجام شد؛ اطلاعاتی ارسال نشد.')}else if(event.target.matches('[data-action="local-form"]')){event.preventDefault();toast('درخواست نمایشی ثبت شد؛ اطلاعات جایی ذخیره نشد.')}});
render();
