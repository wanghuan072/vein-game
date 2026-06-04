import {
  AD_BANNER_DESKTOP,
  AD_BANNER_MOBILE,
  AD_INVOKE_BASE,
  AD_NATIVE,
  AD_POPUNDER_SRC,
  AD_SIDEBAR,
} from './config'

let invokeQueue = Promise.resolve()
let popunderLoaded = false
let nativeScriptLoaded = false

function enqueue(task) {
  invokeQueue = invokeQueue.then(task).catch(() => {})
  return invokeQueue
}

/**
 * 顺序加载 highperformanceformat 广告，避免 atOptions 被并发覆盖
 */
export function loadHighPerformanceAd(hostEl, unit) {
  if (!hostEl || !unit?.key) return Promise.resolve()

  return enqueue(
    () =>
      new Promise((resolve) => {
        hostEl.innerHTML = ''
        window.atOptions = {
          key: unit.key,
          format: 'iframe',
          height: unit.height,
          width: unit.width,
          params: {},
        }

        const script = document.createElement('script')
        script.src = `${AD_INVOKE_BASE}/${unit.key}/invoke.js`
        script.async = true
        const done = () => resolve()
        script.onload = done
        script.onerror = done
        hostEl.appendChild(script)
      }),
  )
}

/** 广告：Popunder 插屏（全站仅加载一次） */
export function loadPopunderAd() {
  if (typeof window === 'undefined' || popunderLoaded) return
  popunderLoaded = true

  const script = document.createElement('script')
  script.src = AD_POPUNDER_SRC
  script.async = true
  document.body.appendChild(script)
}

/** 广告：原生横幅（脚本全站仅加载一次） */
export function loadNativeAd(containerEl) {
  if (!containerEl) return

  if (!document.getElementById(AD_NATIVE.containerId)) {
    const container = document.createElement('div')
    container.id = AD_NATIVE.containerId
    containerEl.appendChild(container)
  }

  if (nativeScriptLoaded) return
  nativeScriptLoaded = true

  const script = document.createElement('script')
  script.async = true
  script.setAttribute('data-cfasync', 'false')
  script.src = AD_NATIVE.scriptSrc
  document.body.appendChild(script)
}

export function getBannerUnit(isMobile) {
  return isMobile ? AD_BANNER_MOBILE : AD_BANNER_DESKTOP
}

export function getSidebarUnit() {
  return AD_SIDEBAR
}
