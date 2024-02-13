export interface SpritesMap {
    'sprite': 'academic-cap' | 'adjustments' | 'annotation' | 'archive' | 'arrow-circle-down' | 'arrow-circle-left' | 'arrow-circle-right' | 'arrow-circle-up' | 'arrow-down' | 'arrow-left' | 'arrow-narrow-down' | 'arrow-narrow-left' | 'arrow-narrow-right' | 'arrow-narrow-up' | 'arrow-right' | 'arrow-sm-down' | 'arrow-sm-left' | 'arrow-sm-right' | 'arrow-sm-up' | 'arrow-up' | 'arrows-expand' | 'at-symbol' | 'backspace' | 'badge-check' | 'ban' | 'bell' | 'book-open' | 'bookmark-alt' | 'bookmark' | 'briefcase' | 'cake' | 'calculator' | 'calendar' | 'camera' | 'cash' | 'chart-bar' | 'chart-pie' | 'chart-square-bar' | 'chat-alt-2' | 'chat-alt' | 'chat' | 'check-circle' | 'check' | 'chevron-double-down' | 'chevron-double-left' | 'chevron-double-right' | 'chevron-double-up' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'chip' | 'clipboard-check' | 'clipboard-copy' | 'clipboard-list' | 'clipboard' | 'clock' | 'cloud-download' | 'cloud-upload' | 'cloud' | 'code' | 'cog' | 'collection' | 'color-swatch' | 'credit-card' | 'cube-transparent' | 'cube' | 'currency-bangladeshi' | 'currency-dollar' | 'currency-euro' | 'currency-pound' | 'currency-rupee' | 'cursor-click' | 'database' | 'desktop-computer' | 'device-mobile' | 'device-tablet' | 'document-add' | 'document-download' | 'document-duplicate' | 'document-remove' | 'document-report' | 'document-search' | 'document-text' | 'document' | 'dots-circle-horizontal' | 'dots-horizontal' | 'dots-vertical' | 'download' | 'duplicate' | 'emoji-happy' | 'emoji-sad' | 'exclamation-circle' | 'exclamation' | 'external-link' | 'eye-off' | 'eye' | 'fast-forward' | 'film' | 'filter' | 'finger-print' | 'fire' | 'flag' | 'folder-add' | 'folder-download' | 'folder-open' | 'folder-remove' | 'folder' | 'gift' | 'globe-alt' | 'globe' | 'hand' | 'hashtag' | 'heart' | 'home' | 'icon-user-remove' | 'identification' | 'inbox-in' | 'inbox' | 'information-circle' | 'key' | 'library' | 'light-bulb' | 'lightning-bolt' | 'link' | 'location-marker' | 'lock-closed' | 'lock-open' | 'logout-1' | 'logout' | 'mail-open' | 'mail' | 'map' | 'menu-alt-1' | 'menu-alt-2' | 'menu-alt-3' | 'menu-alt-4' | 'menu' | 'microphone' | 'minus-circle' | 'minus-sm' | 'minus' | 'moon' | 'music-note' | 'newspaper' | 'office-building' | 'paper-airplane' | 'paper-clip' | 'pause' | 'pencil-alt' | 'pencil' | 'phone-incoming' | 'phone-missed-call' | 'phone-outgoing' | 'phone' | 'photograph' | 'play' | 'plus-circle' | 'plus-sm' | 'plus' | 'presentation-chart-bar' | 'presentation-chart-line' | 'printer' | 'puzzle' | 'qrcode' | 'question-mark-circle' | 'receipt-refund' | 'receipt-tax' | 'refresh' | 'reply' | 'rewind' | 'rotate-left' | 'rss' | 'save-as' | 'save' | 'scale' | 'scissors' | 'search-circle' | 'search' | 'selector' | 'server' | 'share' | 'shield-check' | 'shield-exclamation' | 'shopping-bag' | 'shopping-cart' | 'sm-view-grid-add' | 'sort-ascending' | 'sort-descending' | 'sparkles' | 'speakerphone' | 'star' | 'status-offline' | 'status-online' | 'stop' | 'sun' | 'support' | 'switch-horizontal' | 'switch-vertical' | 'table' | 'tag' | 'template' | 'terminal' | 'thumb-down' | 'thumb-up' | 'ticket' | 'translate' | 'trash' | 'trending-down' | 'trending-up' | 'truck' | 'unlim' | 'upload' | 'user-add' | 'user-circle' | 'user-group' | 'user' | 'users' | 'variable' | 'video-camera' | 'view-boards' | 'view-grid' | 'view-list' | 'volume-off' | 'volume-up' | 'wifi' | 'x-circle' | 'x' | 'zoom-in' | 'zoom-out'
  }
export const SPRITES_META: {
           [Key in keyof SpritesMap]: {
             filePath: string;
             items: Record<SpritesMap[Key], {
                viewBox: string,
                width: number, height: number,
             }>
           }
         } = {
    'sprite': {
    filePath: 'sprite.svg',
    items: {
      'academic-cap': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'adjustments': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'annotation': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'archive': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'arrow-circle-down': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'arrow-circle-left': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'arrow-circle-right': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'arrow-circle-up': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'arrow-down': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'arrow-left': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'arrow-narrow-down': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'arrow-narrow-left': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'arrow-narrow-right': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'arrow-narrow-up': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'arrow-right': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'arrow-sm-down': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'arrow-sm-left': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'arrow-sm-right': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'arrow-sm-up': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'arrow-up': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'arrows-expand': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'at-symbol': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'backspace': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'badge-check': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'ban': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'bell': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'book-open': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'bookmark-alt': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'bookmark': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'briefcase': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'cake': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'calculator': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'calendar': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'camera': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'cash': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'chart-bar': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'chart-pie': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'chart-square-bar': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'chat-alt-2': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'chat-alt': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'chat': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'check-circle': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'check': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'chevron-double-down': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'chevron-double-left': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'chevron-double-right': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'chevron-double-up': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'chevron-down': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'chevron-left': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'chevron-right': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'chevron-up': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'chip': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'clipboard-check': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'clipboard-copy': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'clipboard-list': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'clipboard': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'clock': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'cloud-download': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'cloud-upload': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'cloud': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'code': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'cog': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'collection': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'color-swatch': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'credit-card': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'cube-transparent': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'cube': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'currency-bangladeshi': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'currency-dollar': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'currency-euro': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'currency-pound': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'currency-rupee': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'cursor-click': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'database': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'desktop-computer': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'device-mobile': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'device-tablet': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'document-add': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'document-download': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'document-duplicate': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'document-remove': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'document-report': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'document-search': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'document-text': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'document': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'dots-circle-horizontal': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'dots-horizontal': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'dots-vertical': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'download': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'duplicate': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'emoji-happy': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'emoji-sad': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'exclamation-circle': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'exclamation': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'external-link': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'eye-off': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'eye': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'fast-forward': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'film': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'filter': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'finger-print': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'fire': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'flag': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'folder-add': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'folder-download': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'folder-open': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'folder-remove': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'folder': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'gift': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'globe-alt': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'globe': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'hand': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'hashtag': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'heart': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'home': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'icon-user-remove': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'identification': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'inbox-in': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'inbox': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'information-circle': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'key': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'library': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'light-bulb': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'lightning-bolt': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'link': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'location-marker': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'lock-closed': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'lock-open': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'logout-1': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'logout': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'mail-open': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'mail': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'map': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'menu-alt-1': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'menu-alt-2': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'menu-alt-3': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'menu-alt-4': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'menu': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'microphone': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'minus-circle': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'minus-sm': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'minus': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'moon': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'music-note': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'newspaper': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'office-building': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'paper-airplane': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'paper-clip': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'pause': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'pencil-alt': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'pencil': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'phone-incoming': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'phone-missed-call': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'phone-outgoing': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'phone': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'photograph': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'play': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'plus-circle': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'plus-sm': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'plus': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'presentation-chart-bar': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'presentation-chart-line': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'printer': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'puzzle': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'qrcode': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'question-mark-circle': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'receipt-refund': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'receipt-tax': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'refresh': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'reply': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'rewind': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'rotate-left': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'rss': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'save-as': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'save': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'scale': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'scissors': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'search-circle': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'search': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'selector': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'server': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'share': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'shield-check': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'shield-exclamation': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'shopping-bag': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'shopping-cart': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'sm-view-grid-add': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'sort-ascending': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'sort-descending': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'sparkles': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'speakerphone': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'star': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'status-offline': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'status-online': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'stop': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'sun': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'support': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'switch-horizontal': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'switch-vertical': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'table': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'tag': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'template': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'terminal': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'thumb-down': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'thumb-up': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'ticket': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'translate': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'trash': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'trending-down': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'trending-up': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'truck': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'unlim': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'upload': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'user-add': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'user-circle': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'user-group': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'user': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'users': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'variable': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'video-camera': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'view-boards': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'view-grid': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'view-list': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'volume-off': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'volume-up': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'wifi': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'x-circle': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'x': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'zoom-in': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  },
'zoom-out': {
    viewBox: '0 0 24 24',
    width: 24, height: 24,
  }
    }
}
  };